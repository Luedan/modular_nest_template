/* istanbul ignore file */
import { GetPokemonByName } from './external/pokeApi/getPokemonByName.service';
import { ExampleContext } from './persistence/context/exampleContext.service';
import { TodoRepository } from './persistence/repositories/todo/todo.repository';

/**
 * An array of persistence providers for the example module.
 */
export const EXAMPLE_PERSISTENCE_PROVIDERS = [ExampleContext, TodoRepository];

/**
 * An array of external providers for the example module.
 */
export const EXAMPLE_EXTERNAL_PROVIDERS = [GetPokemonByName];
