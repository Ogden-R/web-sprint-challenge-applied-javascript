import axios from "axios";

// TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //



const Header = (title, date, temp) => {

  const headerDiv = document.createElement('div');
  const dateSpan = document.createElement('span');
  const headerTitle = document.createElement('h1');
  const tempSpan = document.createElement('span');

  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(headerTitle);
  headerDiv.appendChild(tempSpan);

  headerDiv.classList.add('header');
  dateSpan.classList.add('date');
  tempSpan.classList.add('temp');

  dateSpan.textContent = `${date}`;
  headerTitle.textContent = `${title}`;
  tempSpan.textContent = `${temp}°F`;

  return headerDiv;
}
// TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

const headerAppender = (selector) => {
  const newHeader = Header("Lambda Times", "September 3, 2021", "97");
  document.querySelector(selector).appendChild(newHeader);
};

export { Header, headerAppender }

// const cardAppender = (selector) => {
//   axios call to get all the articles
//     .then(articles => {
//       const parent = document.querySelector(selector);
//       loop over array and for each element create a new Card
//       after creating the card append it to parent



//from codeGrade:
// describe('TASK 2 - headerAppender', () => {
//   beforeEach(() => {
//     headerAppender('body')
//   })
//   test('[4] appends the header to the DOM', () => {
//     expect(document.querySelector('.header>h1')).toBeTruthy()
//     expect(document.querySelector('.header>.date')).toBeTruthy()
//     expect(document.querySelector('.header>.temp')).toBeTruthy()
//   })
// })