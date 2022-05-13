import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

import Login from '/src/views/Login.vue'
import ListNotif from '/src/components/ListNotif.vue'
import Navbar from '/src/components/Navbar.vue'
import Notifs from '/src/components/Notifs.vue'


const app = createApp(App)

app.component('Login', Login)
app.component('ListNotif', ListNotif)
app.component('Navbar', Navbar)
app.component('Notifs', Notifs)

app.use(store)
app.use(router)
app.mount('#app')
