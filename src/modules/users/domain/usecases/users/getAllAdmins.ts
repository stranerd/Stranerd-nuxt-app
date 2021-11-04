import { IUserRepository } from '../../irepositories/iuser'
import { appName } from '@utils/environment'

export class GetAllAdminsUseCase {
	private repository: IUserRepository

	constructor (repository: IUserRepository) {
		this.repository = repository
	}

	async call () {
		return await this.repository.get({
			where: [{ field: `roles.${appName}.isAdmin`, value: true }]
		})
	}
}
