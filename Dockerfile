# Base image
FROM node:18-alpine AS build

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
COPY pnpm-lock*.yml ./

# Install app dependencies
RUN npm install pnpm -g

RUN pnpm install

# Bundle app source
COPY . .

# ENV AND ARGS
ARG DATABASE_URL
ARG PORT


ENV NODE_ENV=production
ENV DATABASE_URL $DATABASE_URL
ENV PORT $PORT


# Creates a "dist" folder with the production build
RUN npm run build

# Run the app
FROM node:18-alpine AS production
WORKDIR /home/node/app
COPY --from=build /home/node/app/dist ./dist
COPY --from=build /home/node/app/package*.json ./
COPY --from=build /home/node/app/node_modules ./node_modules

RUN npm install -g pm2 --ignore-scripts



EXPOSE $PORT
# Start the server using the production build
CMD ["pm2-runtime", "dist/main.js"]
