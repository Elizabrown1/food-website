// import Vue from 'vue'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

// import VueRouter from 'vue-router'

// Vue.use(VueRouter)




// const myRouter = new VueRouter({routes, mode: 'history'})

//  Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app')
// const myApp = createApp(App)
createApp(App).use(router).use(router).mount('#app')