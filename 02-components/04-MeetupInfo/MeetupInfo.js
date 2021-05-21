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
        <time datetime="2020-01-01">{{nDate}}</time>
      </li>
    </ul>`,
};
