import axios from "axios";
// import { articles } from '../mocks/data'

// TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>



  //
const Card = (article) => {
  const cardDiv = document.createElement('div');
  const headLineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgContainerDiv = document.createElement('div');
  const photoImg = document.createElement('img');
  const authorNameSpan = document.createElement('span');
  
  cardDiv.appendChild(headLineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgContainerDiv);
  imgContainerDiv.appendChild(photoImg);
  authorDiv.appendChild(authorNameSpan);

  cardDiv.classList.add('card');
  headLineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imgContainerDiv.classList.add('img-container');

  headLineDiv.textContent = article.headline;
  photoImg.src = article.authorPhoto;
  authorNameSpan.textContent = article.authorName;

  return cardDiv;
}


  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

//   const cardAppender = (selector) => {
    
//   //   for (let i = 0; i < articles.length; i++){
//   //   const cardMaker = Card(articles[i]);
//   //   selector.appendChild(cardMaker);
//   // }
//   // return cardAppender;
// }
  
const cardAppender = (selector) => {
  axios.get('http://localhost:5000/api/articles')
  .then(resp => {
    console.log(resp.data);

    for(let i = 0; i < resp.data.message.length; i++){
      const madeCard = { article: resp.data.message[i] }
      const cardMaker = Card(madeCard);
      selector.appendChild(cardMaker);
    }
  })
  .catch(err => {
        const errorText = document.createElement('p');
        errorText.textContent = "Oh No! Try again later :(";
        document.body.appendChild(errorText);
      })
      .finally(() => {
        console.log("We're baaaaaaack!");
      })
}

export { Card, cardAppender }
