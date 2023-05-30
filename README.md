# Vue 3 + TypeScript + Vite

## 技術選用
* Vue3
* Vite
* TypeScript
* vue-router
* Pinia
* element-plus
* AXIOS
* SASS

## 使用*vue-facing-decorator*

- 基本使用，請參考[說明](https://facing-dev.github.io/vue-facing-decorator/#/?id=information)
```
import { Component, Prop, Vue, Watch } from 'vue-facing-decorator'
@Component
export default class Comp extends Vue {

    @Prop
    msg="";
    
    //membor
    text = 'Example code'

    // method
    method() {
        console.log(this.text)
    }

    // life cycle
    mounted() {
        this.method()
    }

   @Watch("property")
    propertyWatcher(newValue: string, oldValue: string) {

    }
}
```
## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
