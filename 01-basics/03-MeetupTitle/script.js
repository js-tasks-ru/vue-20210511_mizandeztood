import Vue from './vendor/vue.esm.browser.js';

// Требуется создать Vue приложение
new Vue({
    data() {
      return {
        choose: '',
        title: ''
      }
    },
    watch: {
        choose(){
            const fetchMeetups = () =>
            fetch('https://course-vue.javascript.ru/api/meetups/'+this.choose).then((res) => res.json());

            fetchMeetups().then((meetup) => {
                this.title = meetup.title;               
            });    
        }       
    }
  }).$mount('#app');