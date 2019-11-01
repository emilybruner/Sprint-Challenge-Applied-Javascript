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

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response);

        response.data.articles.bootstrap.forEach(item => {
            container.appendChild(CreateCard(item));
        });

        response.data.articles.javascript.forEach(item => {
            container.appendChild(CreateCard(item));
        });

        response.data.articles.technology.forEach(item => {
            container.appendChild(CreateCard(item));
        });

        response.data.articles.node.forEach(item => {
            container.appendChild(CreateCard(item));
        });

        response.data.articles.jquery.forEach(item => {
            container.appendChild(CreateCard(item));
        });
    })
    .catch(error => {
        console.log(error);
    });

const container = document.querySelector(".cards-container")

function CreateCard(data) {
    //create elements
    cardDiv = document.createElement("div");
    headline = document.createElement("div")
    authorDiv = document.createElement("div");
    imgDiv = document.createElement("div");
    img = document.createElement("img");
    authorName = document.createElement("span");

    //add classes
    cardDiv.classList.add("card");
    headline.classList.add("headline");
    authorDiv.classList.add("author");
    imgDiv.classList.add("img-container");

    //text values
    headline.textContent = data.headline;
    img.src = data.authorPhoto;
    authorName.textContent = `By ${data.authorName}`;

    //append
    cardDiv.appendChild(headline);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgDiv);
    authorDiv.appendChild(authorName);
    imgDiv.appendChild(img);

    return cardDiv;

}