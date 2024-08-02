import { HttpAdapter } from '@app/modules/common/adapters/httpAdapter.service';
import { Injectable } from '@nestjs/common';

/**
 * A service to get a pokemon by name.
 */
@Injectable()
export class GetPokemonByName {
  /**
   * Constructor
   * @param _http - The HTTP adapter.
   */
  constructor(private readonly _http: HttpAdapter) {
    this._http.initialize({
      baseURL: 'https://pokeapi.co/api/v2',
    });
  }

  /**
   * Get a pokemon by name.
   * @param name - The name of the pokemon.
   * @returns The pokemon.
   */
  async execute(name: string) {
    const response = await this._http.get<any>(`/pokemon/${name}`);
    return response;
  }
}
