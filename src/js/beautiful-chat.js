import Chat from 'vue-beautiful-chat';
const Vue = require('vue/dist/vue');
Vue.use(Chat);

import app from './components/chat_v2.vue';

export default function(el) {
  return new Vue({
    el: el,
    components: {
      'beauty-chat': app
    },
  });
}
