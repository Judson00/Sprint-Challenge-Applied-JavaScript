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

function carouselCreator () {
  //createElements
  let carouselDiv = document.createElement('div')
  let leftButton = document.createElement('div')
  let mountainImage = document.createElement('img')
    mountainImage.style = 'position: relative';
    mountainImage.style = 'z-index:-1';
  let computerImage = document.createElement('img')
  let treesImage = document.createElement('img')
  let turntableImage = document.createElement('img')
  let rightButton = document.createElement('div')

  //add classes
  carouselDiv.classList.add('carousel')
  leftButton.classList.add('left-button')
  rightButton.classList.add('right-button')

  //add content
  mountainImage.src = './assets/carousel/mountains.jpeg'
  computerImage.src = './assets/carousel/computer.jpeg'
  treesImage.src = './assets/carousel/trees.jpeg'
  turntableImage.src = './assets/carousel/turntable.jpeg'
  
  let imageArray = [mountainImage,computerImage,treesImage,turntableImage]
  
  let imageIndex = 0;
  
  const moveCarousel = (num) =>{
  
   for(const images of imageArray){
      images.style = 'display:none';
   }
   
    imageIndex += num;
  
    if (imageIndex > imageArray.length - 1){
      imageIndex = 0
    }
    if(imageIndex < 0 ){
      imageIndex = imageArray.length -1;
    }
    else{
       imageArray[imageIndex].style = 'display:block; z-index:-1';
       
    }
  
  }
  
  leftButton.addEventListener('click', () => {
    moveCarousel(-1);
  });
  
  rightButton.addEventListener('click', () =>{
    moveCarousel(1);
  })

  carouselDiv.appendChild(leftButton)
  carouselDiv.appendChild(mountainImage)
  carouselDiv.appendChild(computerImage)
  carouselDiv.appendChild(treesImage)
  carouselDiv.appendChild(turntableImage)
  carouselDiv.appendChild(rightButton)

  return carouselDiv;
}

const carouselParent = document.querySelector('.carousel-container');
carouselParent.appendChild(carouselCreator());