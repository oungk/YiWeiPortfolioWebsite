'use strict';

/*
GOOGLE SHEET INFO FOR WORK PAGE
*/

const containerBlock = document.querySelector('.story'); // Assuming you have a container in your HTML

// Group data by genre and year
let groupedData = parsedData.reduce((acc, item) => {
  const { Genre, Year, Name, Publication, Link, Info_1, Info_1_Link, Info_2, Info_2_link, Info_3, Info_3_Link} = item;
  if (!acc[Genre]) {
    acc[Genre] = {};
  }
  if (!acc[Genre][Year]) {
    acc[Genre][Year] = [];
  }
  acc[Genre][Year].push({ Name, Publication, Link });
  return acc;
}, {});

// Generate HTML
Object.entries(groupedData).forEach(([Genre, Year]) => {
  const genreDiv = document.createElement('div');
  genreDiv.classList.add('genre');
  
  const genreHeader = document.createElement('h1');
  genreHeader.textContent = Genre;
  genreDiv.appendChild(genreHeader);

  
});
