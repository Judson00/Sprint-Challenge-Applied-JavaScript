/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselCreator(){
  //create elements
  const carouselContainer = document.createElement('div');
  const leftButton = document.createElement('div');
  const mountainImage = document.createElement('img');
  const computerImage = document.createElement('img');
  const treesImage = document.createElement('img');
  const turntableImage = document.createElement('img');
  const rightButton = document.createElement('div');

  //add classes
  carouselContainer.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  //add content
  mountainImage.src = '../assets/carousel/mountains.jpeg';
  computerImage.src = '../assets/carousel/computer.jpeg';
  treesImage.src = '../assets/carousel/trees.jpeg';
  turntableImage.src = '../assets/carousel/turntable.jpeg';

  //append children
  carouselContainer.appendChild(leftButton);
  carouselContainer.appendChild(rightButton);
  carouselContainer.appendChild(mountainImage);
  carouselContainer.appendChild(computerImage);
  carouselContainer.appendChild(treesImage);
  carouselContainer.appendChild(turntableImage);

  return carouselContainer;
}
const parentCarousel = document.querySelector('.carousel-container');
parentCarousel.appendChild(carouselCreator());

