import { TagEntity } from '../entities/tag'
import { QueryParams, QueryResults } from '@modules/core'

export interface ITagRepository {
	get: (query: QueryParams) => Promise<QueryResults<TagEntity>>
}
