import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhTw from 'element-plus/dist/locale/zh-tw.mjs'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { router } from './router/router'
import './styles/index.scss'

const app = createApp(App)

app
.use(ElementPlus, {
    locale: zhTw,
})
.use(createPinia())
.use(router)
app.mount('#app')