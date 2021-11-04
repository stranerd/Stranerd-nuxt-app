import { TagFromModel } from '../models/tag'
import { Listeners, QueryParams, QueryResults } from '@modules/core'

export interface TagBaseDataSource {
	find: (id: string) => Promise<TagFromModel | null>
	get: (query: QueryParams) => Promise<QueryResults<TagFromModel>>
	listenToOne: (id: string, listener: Listeners<TagFromModel>) => Promise<() => void>
	listenToMany: (query: QueryParams, listener: Listeners<TagFromModel>) => Promise<() => void>
}
