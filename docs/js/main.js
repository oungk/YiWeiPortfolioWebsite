'use strict';
/*
IMPORT GOOGLE SHEET
*/

function init() {
    Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/1RHVT0xtkaSgbpRQ1zsdT4jKfYmhGhftLy9ZrHFgJXkU/pubhtml',
    callback: function(data, tabletop) {
    console.log(data)
    },
    simpleSheet: true } )
    }
    window.addEventListener(‘DOMContentLoaded’, init);


    /*
    <head>
        <title>Spreadsheet Parser</title>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.1.0/papaparse.min.js"></script>
</head>

/* LINK IN NEW WINDOW */
document.addEventListener('DOMContentLoaded', () => {
  // Add target="_blank" and rel="noopener noreferrer" to all links
  document.querySelectorAll('a').forEach(link => {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
  });
});

/*
      

<body>
        <ul id="data-list">
          <!-- List items will be inserted here -->
        </ul>
    
        <script type="text/javascript">
          var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1RHVT0xtkaSgbpRQ1zsdT4jKfYmhGhftLy9ZrHFgJXkU/pub?output=csv';
    
          function init() {
            Papa.parse(public_spreadsheet_url, {
              download: true,
              header: true,
              complete: showInfo
            });
          }
    
          window.addEventListener('DOMContentLoaded', init);
    
          function showInfo(results) {
            var data = results.data;
            var list = document.querySelector("#data-list");
    
            // Clear existing list items
            list.innerHTML = "";
    
            // Iterate over each row in the data
            data.forEach(row => {
              var li = document.createElement("li");
    
              // Create a formatted string for each row
              var text = `Genre: ${row['Genre'] || 'N/A'}, Year: ${row['Year'] || 'N/A'}, Name-Publication: ${row['Name-Publication'] || 'N/A'}, Link: ${row['Link'] || 'N/A'}, File: ${row['File'] || 'N/A'}`;
              li.textContent = text;
    
              // Append the list item to the list
              list.appendChild(li);
            });
    
            // Log data to console for debugging
            console.log(data);
          }
        </script> */