import { SubjectEntity } from '../entities/subject'
import { SubjectToModel } from '../../data/models/subject'
import { QueryParams, QueryResults } from '@modules/core'

export interface ISubjectRepository {
	add: (data: SubjectToModel) => Promise<string>
	update: (id: string, data: SubjectToModel) => Promise<void>
	get: (query: QueryParams) => Promise<QueryResults<SubjectEntity>>
	find: (id: string) => Promise<SubjectEntity | null>
	delete: (id: string) => Promise<void>
}
