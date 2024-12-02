'use strict';
/*
EMAIL CONTACT FORM
*/

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_96e6suc';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Sent!';
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
