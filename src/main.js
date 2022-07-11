import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from '@/components/UI'
import messagePlagin from '@/utils/message.plagin'
import 'materialize-css/dist/js/materialize.min'
import tooltipDerective from '@/derectives/tooltip.derective'

const app = createApp(App)

components.forEach((component) => {
  app.component(component.name, component)
})

app
  .use(store)
  .use(router)
  .use(messagePlagin)
  .directive('tooltip', tooltipDerective)
  .mount('#app')
