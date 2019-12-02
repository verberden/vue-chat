const Vue = require('vue/dist/vue.common');
  
// Vue.component('myChat', require('./components/chat.vue'));
const myChat = require('./components/chat.vue');
const app = new Vue({
  el: '#app',
  components: {
    'my-chat': myChat
  },
  created: function () {
    // `this` points to the vm instance
    console.log('Chat is: ' + this)
  },
  mounted: function () {
    console.log('Chat is mounted:');
  },
  updated: function () {
    console.log('Chat is updated.');
  }
});

/* Vue.component('cruelWorld', require('./components/cruelWorld.vue'));

$(document).ready(() => {
  const app1 = new Vue({
    el: '#app',
  });
  console.log(app1);
}) */
