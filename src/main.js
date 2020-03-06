// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueTaber from "./VueTaber"
import store from "./store"
import "./assets/vue-tabs.css"
import tabs from "./tabs"

Vue.config.productionTip = false
const vueTaber = new VueTaber({
  tabs,
  persist: false
});
vueTaber.beforeCreateEach((tab, next) => {
  if(tab.name === "setting"){
    next("home");
  }else{
    next();
  }
});
Vue.use(VueTaber);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  taber: vueTaber,
  store,
  components: { App },
  template: '<App/>'
});
