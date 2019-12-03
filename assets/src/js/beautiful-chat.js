import Chat from 'vue-beautiful-chat';
const Vue = require('vue/dist/vue');
Vue.use(Chat);

import app from './components/chat_v2.vue';
const bc = new Vue({
  el: '#appb',
  components: {
    'beauty-chat': app
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

export { bc }
