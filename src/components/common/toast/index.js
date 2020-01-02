import Toast from "./Toast";

const obj = {}

obj.install = (Vue) => {
  // 创建函数构造器
  const toastConstructor = Vue.extend(Toast)
  // 实例化
  const toast = new toastConstructor()
  // 挂在到一个元素上
  toast.$mount(document.createElement('div'))
  // 添加实例的$el(实例的dom)到body
  document.body.appendChild(toast.$el)
  
  Vue.prototype.$toast = toast
}

export default obj