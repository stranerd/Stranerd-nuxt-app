import { IUserRepository } from '../../irepositories/iuser'
import { UserEntity } from '../../entities/user'
import { Ranks } from '../../entities/rank'
import { appName } from '@utils/environment'
import { Listeners } from '@modules/core'

export class ListenToAllTutorsUseCase {
	private repository: IUserRepository

	constructor (repository: IUserRepository) {
		this.repository = repository
	}

	async call (listener: Listeners<UserEntity>) {
		return await this.repository.listenToMany({
			where: [{ field: `roles.${appName}.isTutor`, value: true }],
			all: true
		}, listener, (entity) => entity.score >= Ranks.Scholar.score)
	}
}
