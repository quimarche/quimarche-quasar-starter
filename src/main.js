import { Quasar } from 'quasar'
import { createApp } from 'vue'

import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/roboto-font/roboto-font.css'

import 'quasar/src/css/index.sass'

import App from '@/Components/App.vue'

createApp(App).use(Quasar).mount('#app')
