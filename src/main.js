import './assets/tailwind.css'
import { createApp } from 'vue'
import router from './router/index.js'
import App from './App.vue'
import main from './components/main.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'  
import { fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
library.add(fas, far)

// Create the Vue app
const app = createApp(App)

// Register the main page component globally
app.component('main-page', main)

// Register the FontAwesomeIcon component globally
app.component('font-awesome', FontAwesomeIcon)

// Use router
app.use(router)

// Mount the vue app
app.mount('#app')
