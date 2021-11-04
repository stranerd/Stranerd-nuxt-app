import { IUserRepository } from '../../irepositories/iuser'
import { UserEntity } from '../../entities/user'
import { Listeners } from '@modules/core'

export class ListenToUserUseCase {
	private repository: IUserRepository

	constructor (repository: IUserRepository) {
		this.repository = repository
	}

	async call (id: string, listeners: Listeners<UserEntity>) {
		return await this.repository.listenToOne(id, listeners)
	}
}
