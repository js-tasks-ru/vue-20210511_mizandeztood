export default {
  name: 'MeetupInfo',
  props: {
    place: {
      type: String,
      required: true
    },
    organizer: {
      type: String,
      required: true
    },    
    date: {
      type: Date,
      required: true
    },
  },
  computed: {
    nDate(){
      return this.date.toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    },
    dtDate(){
      const year = this.date.getFullYear();
      const month = ('0' + (this.date.getMonth()+1)).slice(-2);
      const day = this.date.getDate();
      return year + "-" +month + "-" + day
    }
  },
  template: `
    <ul class="info-list">
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{organizer}}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{place}}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="dtDate">{{nDate}}</time>
      </li>
    </ul>`,
};
