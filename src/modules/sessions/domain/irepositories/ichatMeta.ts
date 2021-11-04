import { ChatMetaEntity } from '../entities/chatMeta'
import { Listeners, QueryParams, QueryResults } from '@modules/core'

export interface IChatMetaRepository {
	get: (query: QueryParams) => Promise<QueryResults<ChatMetaEntity>>
	listenToOne: (id: string, listeners: Listeners<ChatMetaEntity>) => Promise<() => void>
	listenToMany: (query: QueryParams, listeners: Listeners<ChatMetaEntity>, matches: (entity: ChatMetaEntity) => boolean) => Promise<() => void>
}
