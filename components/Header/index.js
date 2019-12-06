// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  //create the elements
  const headerContainer = document.createElement('div');
  const date = document.createElement('span');
  const headerOne = document.createElement('h1');
  const temp = document.createElement('span');
  
  //add classes to the elements
  headerContainer.classList.add('header');
  date.classList.add('date');
  temp.classList.add('temp');

  //append the children
  headerContainer.appendChild(date);
  headerContainer.appendChild(headerOne);
  headerContainer.appendChild(temp);

  return headerContainer;
}

const parentHeader = document.querySelector('.header-container');
parentHeader.appendChild(Header());
