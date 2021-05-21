const MeetupCover = {
  name: 'MeetupCover',
  props: {
    title: {
      type: String,
      required: false
    },
    link: {
      type: String,
      required: false
    }
  },
  computed: {
    nImage(){
      return this.link ? "--bg-url: url('"+this.link+"')" : ""     
    }
  },
  template: `
    <div class="meetup-cover" :style="nImage">
        <h1 class="meetup-cover__title">{{title}}</h1>
    </div>`,
};

export default MeetupCover;
