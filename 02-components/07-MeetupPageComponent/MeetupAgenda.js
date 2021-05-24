import MeetupAgendaItem from './MeetupAgendaItem.js';

const MeetupAgenda = {
  name: 'MeetupAgenda',
  components: {
    MeetupAgendaItem,
  },
  props: {
    agenda: {
      type: Array,
      requied: true
    }
  },
  template: `
    <div class="meetup-agenda">     
      <meetup-agenda-item v-for="a in agenda" :agendaItem="a" :key="a.id"></meetup-agenda-item>      
    </div>`,
};

export default MeetupAgenda;
