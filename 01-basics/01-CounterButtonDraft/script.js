import Vue from './vendor/vue.esm.browser.js';

// new Vue();
new Vue({
    el: '#app',
    data: {      
      counter: 0,
    },
    methods: {
      plusOne: function () {
        this.counter = this.counter+1
      }
    }
  })
