import Vue from './vendor/vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

/**
 * Возвращает ссылку на изображение по идентификатору, например, изображение митапа
 * @param imageId {number} - идентификатор изображения
 * @return {string} - ссылка на изображение
 */
function getImageUrlByImageId(imageId) {
  return `${API_URL}/images/${imageId}`;
}

/**
 * Словарь заголовков по умолчанию для всех типов пунктов программы
 */
const agendaItemDefaultTitles = {
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
};

/**
 * Словарь иконок для для всех типов пунктов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const agendaItemIcons = {
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
};

const fetchMeetup = () =>  
    fetch(API_URL+'/meetups/'+MEETUP_ID).then((res) => res.json());

// Требуется создать Vue приложение
new Vue({
  data() {
    return {
      rawMeetup: null
    }
  },
  
  mounted() {    
    fetchMeetup().then((meetup) => {     
      this.rawMeetup = meetup;
    });
  },

  ///*** Почему-то не работает функция map ниже ***///
  computed: {    
    meetups() {
      if (!this.rawMeetup) {
        return null;
      }
      return this.rawMeetup;
      
      /*return this.rawMeetup.map((meetup) => ({
        ...meetup,
        date: new Date(meetup.date),
        cover: meetup.imageId && `https://course-vue.javascript.ru/api/images/${meetup.imageId}`,
        coverStyle: meetup.imageId && { '--bg-url': `url(https://course-vue.javascript.ru/api/images/${meetup.imageId})` },
        localeDate: new Date(meetup.date).toLocaleString(navigator.language, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        dateOnlyString: new Date(meetup.date).toISOString().split('T')[0],
      }));*/

    },

    filteredDate() {     
      if (!this.meetups) {
        return null;
      }
      return new Date(this.meetups.date).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },

    filteredImage() {
      if (!this.meetups) {
        return null;
      }      
      if(this.meetups.imageId != null) {
        return '--bg-url: url('+getImageUrlByImageId(this.meetups.imageId)+')';
      }
    }   

  }
}).$mount('#app');