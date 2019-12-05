const Vue = require('vue/dist/vue');

// Vue.component('myChat', require('./components/chat.vue'));
import app from './components/chat.vue';
console.log('sch', app);
//Vue.component('simple-chat', require('./components/chat.vue'));

//const app1 = new Vue({
//  el: '#app1',
//});


const sc = new Vue({
  el: '#apps',
  components: {
    'simple-chat': app
  },
  created: function () {
    // `this` points to the vm instance
    console.log(this)
  },
  mounted: function () {
    console.log('Chat is mounted:');
  },
  updated: function () {
    console.log('Chat is updated.');
  }
});

export { sc }