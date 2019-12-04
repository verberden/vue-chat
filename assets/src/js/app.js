import '../css/style.scss';
import bc from './beautiful-chat'
// import sc from './simple-chat'
$(document).ready(() => {
  $('#smart-button').on('click', function() {
    bc.send({ author: 'user1', type: 'text', text: 'hello' });
  })
})

