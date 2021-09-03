import axios from "axios";

// TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

const Tabs = (topics) => {
  const topicDiv = document.createElement('div');
  const javascriptDiv = document.createElement('div');
  const bootstrapDiv = document.createElement('div');
  const techDiv = document.createElement('div');
  const jQueryDiv = document.createElement('div');
  const nodeDiv = document.createElement('div');

  topicDiv.appendChild(javascriptDiv);
  topicDiv.appendChild(bootstrapDiv);
  topicDiv.appendChild(techDiv);
  topicDiv.appendChild(jQueryDiv);
  topicDiv.appendChild(nodeDiv);
  
  topicDiv.classList.add('topics');
  javascriptDiv.classList.add('tab');
  bootstrapDiv.classList.add('tab');
  techDiv.classList.add('tab');
  jQueryDiv.classList.add('tab');
  nodeDiv.classList.add('tab');

  javascriptDiv.textContent = topics[0];
  bootstrapDiv.textContent = topics[1];
  techDiv.textContent = topics[2];
  jQueryDiv.textContent = topics[3];
  nodeDiv.textContent = topics[4];

  return topicDiv;
}

// describe('TASK 3 - Tabs', () => {
//   let tabs
//   beforeEach(() => {
//     tabs = Tabs(['foo', 'bar', 'baz'])
//   })
//   test('[5] returns topic tabs with the correct text', () => {
//     expect(queries.getByText(tabs, 'foo'))
//     expect(queries.getByText(tabs, 'bar'))
//     expect(queries.getByText(tabs, 'baz'))
//   })
// })


// TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
const tabsAppender = (selector) => {
  //no
}

export { Tabs, tabsAppender }


console.log(axios.get('http://localhost:5000/api/topics'))