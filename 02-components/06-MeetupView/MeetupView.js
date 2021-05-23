import MeetupCover from './MeetupCover.js';
import MeetupDescription from './MeetupDescription.js';
import MeetupAgenda from './MeetupAgenda.js';
import MeetupInfo from './MeetupInfo.js';
import { getImageUrlByImageId } from './data.js';

const MeetupView = {
  name: 'MeetupView',
  components: {
    MeetupCover,
    MeetupDescription,
    MeetupAgenda,
    MeetupInfo,
    getImageUrlByImageId
  },
  props: {
    meetup: {
      type: Object,
      required: true
    }
  },
  computed: {
    nImage(){
      return this.meetup.imageId ? getImageUrlByImageId(this.meetup.imageId) : ""
    },
    nDate() {
      return new Date(this.meetup.date)
    }
  },

  template: `
    <div>
      <!-- meetup cover -->
      <meetup-cover :title="meetup.title" :link="nImage"></meetup-cover>
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <!-- meetup description -->
            <meetup-description :description="meetup.description"></meetup-description>
            <h3>Программа</h3>
            <!-- meetup agenda -->
            <meetup-agenda :agenda="meetup.agenda"></meetup-agenda>
          </div>
          <div class="meetup__aside">
            <!-- meetup info -->            
            <meetup-info :place="meetup.place" :organizer="meetup.organizer" :date="nDate"></meetup-info>
          </div>
        </div>
      </div>
    </div>`,
};

export default MeetupView;
