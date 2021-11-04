import { ChatFromModel } from './chat'
import { UserBio } from '@modules/users'

export interface ChatMetaFromModel {
	id: string
	unRead: string[]
	ownerId: string
	userId: string
	userBio: UserBio
	last: ChatFromModel
	createdAt: number
	updatedAt: number
}
