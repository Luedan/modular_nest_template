import { GetPokemonByName } from './external/pokeApi/getPokemonByName.service';
import { ExampleContext } from './persistence/context/exampleContext.service';
import { TodoRepository } from './persistence/repositories/todo/todo.repository';

export const EXAMPLE_PERSISTENCE_PROVIDERS = [ExampleContext, TodoRepository];

export const EXAMPLE_EXTERNAL_PROVIDERS = [GetPokemonByName];
