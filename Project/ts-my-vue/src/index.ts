// const hello='hello yishi'
// // let ceshi:number='sw'
// document.querySelectorAll('.app')[0].innerHTML = hello;
// globalLib.doSomething()

import Hello from './components/Hello.vue'

import Vue from 'vue'
const app1 = new Vue({
    el:'.app',
    data:{
        name:'Trpescript'
    },
    components:{
        Hello
    },
    template:`<Hello>{{name}}</Hello>`
})