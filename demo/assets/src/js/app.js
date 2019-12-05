import VueChat from '../../../../dist/js/vue-chat';

$(document).ready(() => {
  VueChat.Bc('#appb');
  $('#smart-button').on('click', function() {
    VueChat.bus.$emit('sendMessage', { author: 'user1', type: 'text', text: 'hello' });
  })
})
