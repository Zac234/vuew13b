import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

export default{
  props:{
    Author:"jason",
    Content:"this is a nice day for a ride",
    Created_at: 09/02/16,

    Author:"Gina",
    Content:"what a cold afternoon",
    Created_at: 08/02/17,

    Author: "Zach",
    Content:"I like games",
    Created_at: 12/13/18,


  },
  methods:{
    makecardlist(){
      document.createElement(button).addEventListener(onclick);
        document.button="click me"

    },
    makelist(){
      document.createElement(button).addEventListener(ondblclick);
        document.button="list view"
      
    }



  }
}
