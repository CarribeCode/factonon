// This program builds names randomly with the english alphabet

// Line 6 to 25 for background animation.
// Line 28 to 180 is the name making code.

let a1 = 120,
  b1 = 0,
  a2 = 60,
  b2 = 60;

setInterval(() => {
  let p1 = 50 + Math.abs(a1 - b1);
  let p2 = 50 + Math.abs(a2 - b2);

  document.body.style.backgroundImage =
    `linear-gradient(115deg, #111 80%, rgb(${p1},0,${p2}) 20%)`;
  a1--;
  b1++;
  a2++;
  b2--;
  if (a1 === 0) a1 = 120;
  if (b1 === 120) b1 = 0;
  if (a2 === 120) a2 = 0;
  if (b2 === 0) b2 = 120;
}, 100);


// The letters of the alphabet (Lèt alfabè yo)
var alfa = [];
for (var i = 65; i <= 90; i++) {
  alfa.push(i);
}

var konpo = ['BH', 'BL', 'BM', 'BN', 'BR', 'BW', 'CH', 'CK', 'CL', 'CR', 'CW', 'DH', 'DJ', 'DL',
  'DR', 'DW', 'DZ', 'FH', 'FL', 'FN', 'FR', 'FW', 'GH', 'GL', 'GM', 'GN', 'GR', 'GW', 'JW', 'KH',
  'KL', 'KM', 'KN', 'KW', 'LH', 'LW', 'MH', 'MW', 'NH', 'NW', 'PF', 'PH', 'PL', 'PR', 'PS', 'PW',
  'RH', 'RW', 'SB', 'SC', 'SD', 'SF', 'SH', 'SK', 'SL', 'SM', 'SN', 'SP', 'SR', 'ST', 'SV', 'SW',
  'SZ', 'TH', 'TL', 'TR', 'TS', 'TW', 'VL', 'VM', 'VN', 'VR', 'VW', 'WH', 'WR', 'ZH', 'ZL', 'ZR',
  'ZV', 'ZW'
];


//Declaration of the usefull variables
var name, actualChar, len, method;

// This function will return composed elements from the array konpo.
function konpo() {
  return konpo[Math.floor(Math.random() * konpo.length)];
}

// This function produces only vowels (Fonksyon sa a bay vwayèl sèlman)
function vowel() {
  do {
    actualChar = Math.floor(Math.random() * 26 + 65);
  }
  while (actualChar != 65 && actualChar != 69 && actualChar != 73 && actualChar != 79 && actualChar != 85 && actualChar != 89);

  return actualChar;
}

// This function only produces consonants (Fonksyon sa a bay konson sèlman)
function consonant() {
  do {
    actualChar = Math.floor(Math.random() * 26 + 65);
  }
  while (actualChar == 65 || actualChar == 69 || actualChar == 73 || actualChar == 79 || actualChar == 85 || actualChar == 89 || actualChar == 96);

  return actualChar;
}

// Once we click on the button
document.getElementById('btn').addEventListener('click', function() {
  // We declare necessary variables first.

  // Step 1 (Etap 1) : The base length (Longè baz la)
  // N.B: The base length is the number of elements (vowels, consonants and composed like 'ch')
  //      that will be associated to form the name.
  // N.B: Longè baz la se kantite eleman (vwayèl, konson ak konpoze tankou 'ch') k ap asosye pou
  //      fome non an.
  len = Math.floor(Math.random() * 7 + 2);

  // Step 2 (Etap 2) : The method which will be used to make the name. (Metod la nou pral kreye non an)
  method = Math.ceil(Math.random() * 9);

  // Step 3 (Etap 3) : Initiating the name to nothing.
  name = '';

  // Step 4 (Etap 4) : Making the name
  for (let j = 1; j <= len; j++) {
    switch (method) {
      case 1: { //Characters on even positions are consonants.
        if (j % 2 == 0) {
          actualChar = consonant();
        } else {
          actualChar = vowel();
        }
      }
      break;

    case 2: { //Characters on even positions are vowels.
      if (j % 2 == 0) {
        actualChar = vowel();
      } else {
        actualChar = consonant();
      }
    }
    break;

    case 3: { //Characters on position 1 and even positions are consonants.
      if (j == 1 || j % 2 == 0) {
        actualChar = consonant();
      } else {
        actualChar = vowel();
      }
    }
    break;

    case 4: { //Vowels are on positions 2 and 5
      if (j == 2 || j == 5 || j == 7) {
        actualChar = vowel();
      } else {
        actualChar = consonant();
      }
    }
    break;

    case 5: { //Characters position 1 and on positions multiples of 3 are vowels.
      if (j == 1 || j % 3 == 0) {
        actualChar = vowel();
      } else {
        actualChar = konpo();
      }
    }
    break;

    case 6: {
      if (j % 2 == 0) {
        actualChar = vowel();
      } else {
        actualChar = konpo();
      }
    }
    break;

    case 7: {
      if (j == 1) {
        actualChar = konpo();
      } else if (j % 2 == 0) {
        actualChar = vowel();
      } else {
        actualChar = consonant();
      }
    }
    break;

    case 8: {
      if (j == 1 || j % 2 == 0) {
        actualChar = vowel();
      } else {
        actualChar = consonant();
      }
    }

    default: {
      if (j == 3 || j == 7) {
        actualChar = konpo();
      } else if (j % 2 == 0) {
        actualChar = vowel();
      } else {
        actualChar = consonant();
      }
    }

    }
    // Step 5 (Etap 5) : Put everything together (Mete tout eleman yo ansanm).
    name += String.fromCharCode(actualChar);
  }
  // Step 6 (Etap 6) : Show the name on the page.
  document.getElementById("rezilta").innerHTML = name;
});

//Done, it is possible to find more algorithm to make names but these are those i stick with for now.
