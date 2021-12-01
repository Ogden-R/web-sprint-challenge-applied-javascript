import axios from "axios";
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

  cardDiv.addEventListener('click',()=>{console.log(article.headline)});


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

  
const cardAppender = (selector) => {

  axios
    .get("http://localhost:5000/api/articles")
    .then((response) => {
      const articles1 = response.data.articles.javascript;
      const articles2 = response.data.articles.bootstrap;
      const articles3 = response.data.articles.technology;
      const articles4 = response.data.articles.jquery;
      const articles5 = response.data.articles.node;

      console.dir(articles1);
      articles1.forEach((articles1) => {
        const card = Card(articles1);
        document.querySelector(selector).appendChild(card);
      });
      articles2.forEach((articles2) => {
        const card = Card(articles2);
        document.querySelector(selector).appendChild(card);
      });
      articles3.forEach((articles3) => {
        const card = Card(articles3);
        document.querySelector(selector).appendChild(card);
      });
      articles4.forEach((articles4) => {
        const card = Card(articles4);
        document.querySelector(selector).appendChild(card);
      });
      articles5.forEach((articles5) => {
        const card = Card(articles5);
        document.querySelector(selector).appendChild(card);
      });
    })
    .catch((error) => {
      const errorText = document.createElement("p");
      errorText.textContent = "Oops! Something went wrong.";
      document.body.appendChild(errorText);
      console.log("Error");
    });
};
export { Card, cardAppender }
