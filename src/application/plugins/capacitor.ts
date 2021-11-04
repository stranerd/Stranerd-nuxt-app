import { Toast } from '@capacitor/toast'
import { Network } from '@capacitor/network'
import { defineNuxtPlugin } from '@nuxtjs/composition-api'

export default defineNuxtPlugin(async (_, inject) => {
	inject('toast', Toast)
	inject('network', Network)
})
