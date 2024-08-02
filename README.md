# Proyecto NestJS

Este proyecto es una plantilla de aplicación NestJS organizada con una arquitectura modular y escalable, diseñada para facilitar el desarrollo y mantenimiento de aplicaciones robustas.

## Estructura del Proyecto

```plaintext
.
├── docker-compose.yml           # Configuración para Docker Compose
├── Dockerfile                   # Configuración del Dockerfile para la imagen de Docker
├── jest.config.js               # Configuración de Jest para pruebas
├── nest-cli.json                # Configuración del CLI de NestJS
├── package.json                 # Dependencias y scripts del proyecto
├── pnpm-lock.yaml               # Bloqueo de dependencias con PNPM
├── README.md                    # Documentación del proyecto
├── tsconfig.build.json          # Configuración de TypeScript para el build
├── tsconfig.json                # Configuración TypeScript
├── src                          # Código fuente de la aplicación
│   ├── app.module.ts            # Módulo principal de la aplicación
│   ├── config                   # Configuración de la aplicación
│   │   └── envs.ts              # Configuración de variables de entorno
│   ├── main.ts                  # Punto de entrada de la aplicación
│   └── modules                  # Módulos de la aplicación
│       ├── common               # Módulo común con utilidades compartidas
│       │   ├── adapters         # Adaptadores de infraestructura
│       │   ├── common.module.ts # Declaración del módulo común
│       │   ├── filters          # Filtros de excepciones
│       │   └── interceptors     # Interceptores de solicitudes
│       ├── database             # Módulo de base de datos
│       │   ├── classes          # Clases base y repositorios
│       │   ├── database.module.ts # Declaración del módulo de base de datos
│       │   └── types.d.ts       # Definiciones de tipos
│       └── example              # Módulo de ejemplo con funcionalidad CRUD
│           ├── domain           # Entidades y lógica de dominio
│           │   ├── dto          # Data Transfer Objects (DTOs)
│           │   └── todo.entity.ts # Entidad Todo
│           ├── example.module.ts # Declaración del módulo de ejemplo
│           ├── infrastructure   # Infraestructura del módulo
│           │   ├── external     # Integración con APIs externas
│           │   └── persistence  # Persistencia de datos
│           │       ├── context  # Contextos de persistencia
│           │       └── repositories # Repositorios de datos
│           ├── presentation     # Capa de presentación (controladores)
│           │   ├── controllers  # Controladores del módulo
│           └── services         # Servicios de aplicación
│               ├── profiles     # Perfiles para mapeos (por ejemplo, AutoMapper)
│               └── useCases     # Casos de uso de la aplicación
├── __test__                     # Pruebas unitarias
│   ├── exampleModule            # Pruebas del módulo de ejemplo
│   │   ├── infrastructure       # Pruebas de infraestructura
│   │   ├── presentation         # Pruebas de controladores
│   │   └── services             # Pruebas de servicios
│   ├── jest.setup.js            # Configuración de Jest para pruebas
│   └── mocks                    # Mocks para pruebas unitarias
│       ├── exampleModule        # Mocks del módulo de ejemplo
│       └── resultsMocks.ts      # Mocks de resultados
```

## Requisitos

- **Node.js 18+**
- **PNPM 8+**
- **NestJS 10+**
- **Docker** (opcional, para despliegue en contenedores)

## Instalación

1. **Clona el repositorio**:

   ```bash
   git clone <repositorio-url>
   ```
2. **Instala las dependencias**:

   ```bash
   pnpm install
   ```
3. **Configura las variables de entorno**:

   - Renombra el archivo `.env.example` a `.env` y ajusta las variables según tu entorno.

## Ejecución

### Desarrollo

Para iniciar la aplicación en modo de desarrollo:

```bash
pnpm start:dev
```

### Producción

Para construir la aplicación y ejecutarla en un entorno de producción:

```bash
pnpm build
pnpm start:prod
```

### Docker

Para construir y ejecutar la aplicación dentro de un contenedor Docker:

```bash
docker-compose up --build
```

## Pruebas

Las pruebas unitarias están ubicadas en el directorio `__test__` y están organizadas por módulos. Para ejecutar las pruebas:

```bash
pnpm test
```

## Descripción de Módulos

### Common Module

Contiene componentes reutilizables como adaptadores, filtros e interceptores que pueden ser utilizados en toda la aplicación.

### Database Module

Gestión de la conexión a la base de datos y proporciona clases y repositorios para la manipulación de datos.

### Example Module

Un módulo de ejemplo que implementa una funcionalidad básica de CRUD (Crear, Leer, Actualizar, Eliminar) utilizando principios de DDD (Domain-Driven Design).

### Configuración de Docker

- **Dockerfile**: Archivo para la creación de la imagen Docker de la aplicación.
- **docker-compose.yml**: Archivo para configurar y ejecutar contenedores de Docker con `docker-compose`.

## Contribución

Si deseas contribuir a este proyecto, sigue los siguientes pasos:

1. **Crea un branch** para tu feature:

   ```bash
   git checkout -b feature/nueva-feature
   ```
2. **Realiza tus cambios** y haz commits:

   ```bash
   git commit -m "Descripción del cambio"
   ```
3. **Sube tu branch** al repositorio remoto:

   ```bash
   git push origin feature/nueva-feature
   ```
4. **Crea un Pull Request** para revisar y fusionar los cambios.

## Licencia

Este proyecto está bajo la **licencia MIT**. Consulta el archivo `LICENSE` para más detalles.
