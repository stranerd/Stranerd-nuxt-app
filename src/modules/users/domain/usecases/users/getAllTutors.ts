import { IUserRepository } from '../../irepositories/iuser'
import { appName } from '@utils/environment'

export class GetAllTutorsUseCase {
	private repository: IUserRepository

	constructor (repository: IUserRepository) {
		this.repository = repository
	}

	async call () {
		return await this.repository.get({
			where: [{ field: `roles.${appName}.isTutor`, value: true }],
			all: true
		})
	}
}
