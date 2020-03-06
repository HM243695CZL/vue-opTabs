import TabsView from "./Tabs.vue"
export default function install(Vue){
  if(install.installed){
    return;
  }
  install.installed = true;

  Object.defineProperty(Vue.prototype, "$taber", {
    get(){
      return this.$root._taber;
    }
  });

  Object.defineProperty(Vue.prototype, "$tab", {
    get(){
      return this.$options.$tab;
    }
  });

  TabsView.methods.getVue = () => Vue;
  Vue.component("VueTabs", TabsView);
  /**
   * 全局混入：使用时格外小心！一旦使用全局混入，它将影响每一个之后创建的 Vue 实例。
   * 使用恰当时，这可以用来为自定义选项注入处理逻辑。
   */
  Vue.mixin({
    beforeCreate(){
      if(this.$options.taber){
        this._taber = this.$options.taber;
      }else if(this.$options.__taber){
        this._taber = this.$options.__taber;
      }
    }
  })
}
