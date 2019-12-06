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

let holderArray = [];
axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
  let allTopics = response.data.articles;
  let topics = Object.values(allTopics);
  let topicNames = Object.keys(allTopics);
  // console.log("all" + allTopics);
  // console.log("keys: " + topicNames);
  // console.log(topics);
  topics.forEach(topic => {
    topic.forEach(article => {
      for (let i=0; i<topicNames.length; i++){
        let currentTopic = topicNames[i]
        
        if (allTopics[currentTopic].includes(article)){
          article["data-topic"] = currentTopic;
        }
      }
    let cardParent = document.querySelector(".cards-container");
    let newCard = createCard(article);
    cardParent.appendChild(newCard);
    holderArray.push(newCard);
    })
  }
  )
})
  .catch(error =>{
    console.log(`There was a ${error}`);
  })
  function createCard(holder){
    //create the elements
    const cardContainer = document.createElement('div');
    if(holder['data-topic']!== 'node'){
      cardContainer.classList.add(holder['data-topic']);
    }else if(holder['data-topic']==='node'){
      cardContainer.classList.add('node.js');
    }

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
    headLine.textContent = holder.headline;
    image.src = holder.authorPhoto;
    authorName.textContent = `By ${holder.authorName}`;

    //append children
    cardContainer.appendChild(headLine);
    cardContainer.appendChild(authorContainer);
    authorContainer.appendChild(imgContainer)
    authorContainer.appendChild(authorName);
    imgContainer.appendChild(image);

    return cardContainer;
  }

  
