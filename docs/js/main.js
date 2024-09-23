'use strict';
const apiKey= "AIzaSyAqZnZahpWK7uB5FtGUYEEJCBjDO15tnf0"; // API key is not sensitive

/*
IMPORT GOOGLE SHEET
*/
const spreadsheetId = '1RHVT0xtkaSgbpRQ1zsdT4jKfYmhGhftLy9ZrHFgJXkU'; // Replace with your spreadsheet ID

let parsedData;

fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`)
  .then(response => response.json()) // Get the response as JSON
  .then(data => {
    const headers = data.values[0]; // Get the headers from the first row
    const rows = data.values.slice(1); // Get the remaining rows
    parsedData = rows.map(row => {
      const obj = {};
      headers.forEach((header, index) => {
        obj[header] = row[index]; // Create an object for each row
      });
      return obj; // Return the object for each row
    });

    console.log(parsedData); // Access the parsed data
  })
  .catch(error => console.error('Error fetching the Google Sheets file:', error));

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
