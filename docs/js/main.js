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
