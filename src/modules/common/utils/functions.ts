import { PaginatedResponseDto } from '../domain/dtos/paginateResponse.dto';

/**
 * Creates a paginated response object.
 *
 * @template T - The type of the data items.
 * @param {Object} params - The parameters for creating the paginated response.
 * @param {T[]} params.data - The array of data items.
 * @param {number} params.total - The total number of items.
 * @param {number} params.page - The current page number.
 * @param {number} params.limit - The number of items per page.
 * @returns {PaginatedResponseDto<T>} The paginated response object.
 */
export function createPaginatedResponse<T>({
  data,
  total,
  page,
  limit,
}: {
  data: T[];
  total: number;
  page: number;
  limit: number;
}): PaginatedResponseDto<T> {
  return {
    data,
    total: total,
    currentPage: page,
    nextPage: page < Math.ceil(total / limit) ? page + 1 : null,
    previousPage: page > 1 ? page - 1 : null,
    lastPage: Math.ceil(total / limit),
    limit,
  };
}
