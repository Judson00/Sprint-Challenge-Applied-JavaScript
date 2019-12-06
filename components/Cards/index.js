// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response =>{
    console.log(response);
    let returnObject = response.data.articles;
    const arrayObjects = Object.values(returnObject);
    console.log(arrayObjects);

    let javascriptObject = arrayObjects[0];
    javascriptObject.forEach(info => {
      attachParent.appendChild(createCard(info.headline, info.authorName, info.authorPhoto))
    })
    let bootstrapObject = arrayObjects[1];
    bootstrapObject.forEach(info => {
      attachParent.appendChild(createCard(info.headline, info.authorName, info.authorPhoto))
    })
    let technologyObject = arrayObjects[2];
    technologyObject.forEach(info => {
      attachParent.appendChild(createCard(info.headline, info.authorName, info.authorPhoto))
    })
    let jqueryObject = arrayObjects[3];
    jqueryObject.forEach(info => {
      attachParent.appendChild(createCard(info.headline, info.authorName, info.authorPhoto))
    })
    let nodeObject = arrayObjects[4];
    nodeObject.forEach(info => {
      attachParent.appendChild(createCard(info.headline, info.authorName, info.authorPhoto))
    })
    .catch(error =>{
      console.log(`There was a ${error}`);
    })
  })

  const attachParent = document.querySelector('.cards-container');

  function createCard(headline, author, photo, name){
    //create the elements
    const cardContainer = document.createElement('div');
    const headLine = document.createElement('div');
    const authorContainer = document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const authorName = document.createElement('span');

    //add classes
    cardContainer.classList.add('card');
    headLine.classList.add('headline');
    authorContainer.classList.add('author');
    imgContainer.classList.add('img-container');

    //add content
    headLine.textContent = headline;
    image.src = photo;
    authorName.textContent = `By ${author}`;

    //append children
    cardContainer.appendChild(headLine);
    cardContainer.appendChild(authorContainer);
    authorContainer.appendChild(imgContainer)
    authorContainer.appendChild(authorName);
    imgContainer.appendChild(image);

    return cardContainer;
  }
