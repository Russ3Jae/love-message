const heartPattern =  [
  [' ', ' ', 'P', 'P', 'P', ' ', ' ', ' ', 'P', 'P','P', ' ', ' '],
  [' ', 'P', 'L', 'L', 'L', 'P', ' ', 'P', 'S', 'S', 'S', 'P', ' '],
  ['P', 'L', 'H', 'H', 'L', 'L', 'P', 'S', 'S', 'S', 'S', 'S', 'P'],
  ['P', 'L', 'H', 'L', 'L', 'L', 'L', 'L', 'S', 'S', 'S', 'S', 'P'],
  ['P', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'S', 'S', 'S', 'P'],
  [' ', 'P', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'S', 'S', 'P', ' '],
  [' ', ' ', 'P', 'L', 'L', 'L', 'L', 'L', 'L', 'S', 'P', ' ', ' '],
  [' ', ' ', ' ', 'P', 'L', 'L', 'L', 'L', 'S', 'P', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', 'P', 'L', 'L', 'S', 'P', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', 'P', 'S', 'P', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'P', ' ', ' ', ' ', ' ', ' ', ' ']
];

const heartElement = document.querySelector('.heart');
let isHeartLifted = false; // Track the lift state

for (let row of heartPattern) {
  for (let cell of row) {
      const pixel = document.createElement('div');
      if (cell === 'P') {
          pixel.classList.add('pink-pixel');
      } else if (cell === 'L') {
          pixel.classList.add('light-pink-pixel');
      }
        else if (cell === "S") {
          pixel.classList.add('shadow')
      }
        else if (cell === "H") {
          pixel.classList.add('highlight'); 
      }
      // No need to handle spaces; they remain empty
      heartElement.appendChild(pixel);
  }
}

let isMessageVisible = false; // Track if the message is visible
let isMessage2Visible = false; 

// Event delegation on the heart element
heartElement.addEventListener('mouseover', (event) => {
  if (!isHeartLifted && isFilledPixel(event.target) && !isMessageVisible) {
      heartElement.classList.add('lifted');
      isHeartLifted = true;
  }
});

heartElement.addEventListener('mouseout', (event) => {
  if (isHeartLifted && !isFilledPixel(event.relatedTarget)) {
      heartElement.classList.remove('lifted');
      isHeartLifted = false;
  }
});

// Helper function to check if the target is a filled pixel
function isFilledPixel(element) {
  return element.classList.contains('pink-pixel') ||
        element.classList.contains('light-pink-pixel') ||
        element.classList.contains('shadow') ||
        element.classList.contains('highlight');
}

const belowMessage = document.querySelector('.below-message');
const belowMessage2 = document.querySelector('.below-message2');

heartElement.addEventListener('click', () => {
  if (!isMessageVisible) {
      belowMessage.classList.add('visible');
      heartElement.classList.add('heart-clicked1');
      heartElement.classList.add('heart-clicked2'); 
      setTimeout(()=> {
        heartElement.classList.remove('heart-clicked1')
      }, 200); 
      isMessageVisible = true;
      heartElement.classList.remove('lifted');
      isHeartLifted = false;
      heartElement.classList.add('heart-clicked')
  }
});

belowMessage.addEventListener('click', () => {
if (!isMessage2Visible) {
    belowMessage2.classList.add('visible');
    isMessage2Visible = true;
    // Make the first below message non-interactive
    belowMessage.style.cursor = 'default';
    belowMessage.style.pointerEvents = 'none';
 }
});
