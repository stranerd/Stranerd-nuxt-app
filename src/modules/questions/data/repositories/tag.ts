import { ITagRepository } from '../../domain/irepositories/itag'
import { TagBaseDataSource } from '../datasources/tag-base'
import { TagTransformer } from '../transformers/tag'
import { QueryParams } from '@modules/core'

export class TagRepository implements ITagRepository {
	private dataSource: TagBaseDataSource
	private transformer: TagTransformer

	constructor (dataSource: TagBaseDataSource, transformer: TagTransformer) {
		this.dataSource = dataSource
		this.transformer = transformer
	}

	async get (query: QueryParams) {
		const models = await this.dataSource.get(query)
		return {
			...models,
			results: models.results.map(this.transformer.fromJSON)
		}
	}
}
