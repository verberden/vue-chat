import bc from './beautiful-chat'
import bus from './components/bus'
// import sc from './simple-chat'
$(document).ready(() => {
  $('#smart-button').on('click', function() {
    console.log(bus);
    bus.$emit('sendMessage', { author: 'user1', type: 'text', text: 'hello' })
  })
})

