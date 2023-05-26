import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhTw from 'element-plus/dist/locale/zh-tw.mjs'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus, {
    locale: zhTw,
})
app.mount('#app')