import { ExampleContext } from './persistence/context/exampleContext.service';
import { TodoRepository } from './persistence/repositories/todo/todo.repository';

export const PERSISTENCE_PROVIDERS = [ExampleContext, TodoRepository];
