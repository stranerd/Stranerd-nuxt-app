import Vue from 'vue'

// add a direct link to @ionic/core
import { defineCustomElements as Ionic } from '@ionic/core/loader'
import { defineCustomElements as Pwa } from '@ionic/pwa-elements/loader'

// @ts-ignore
Vue.use(Ionic)
// @ts-ignore
Vue.use(Pwa)
Vue.config.ignoredElements = [/^ion-/]
