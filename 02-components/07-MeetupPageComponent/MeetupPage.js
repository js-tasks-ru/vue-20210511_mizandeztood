import MeetupView from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

const MeetupPage = {
  name: 'MeetupPage',
  components: {
    MeetupView
  },
  data() {
    return {
      rawMeetup: null
    };
  },
  mounted() {    
    fetchMeetup(MEETUP_ID).then((meetup) => {     
      this.rawMeetup = meetup;
    });
  },
  //template: `<div></div>`,
  template: `<meetup-view v-if="rawMeetup" :meetup="rawMeetup"></meetup-view>`
};

export default MeetupPage;
