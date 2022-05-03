// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  router,
  render:function(createElement){
    // return createElement('h3',{class:'st1'},['hello Vue.js',createElement('h2',['hello insider!'])])
    return createElement(App)
  }
})
