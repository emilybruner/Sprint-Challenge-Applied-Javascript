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

class Carousel {
  constructor(carouselElement) {
    this.carouselElement = carouselElement;
    this.leftButton = this.carouselElement.querySelector(".left-button");
    this.rightButton = this.carouselElement.querySelector(".right-button");
    this.images = this.carouselElement.querySelectorAll("img");
    this.index = 0;
    this.leftButton.addEventListener("click", () => this.nextPhotoLeft());
    this.rightButton.addEventListener("click", () => this.nextPhotoRight());
  }
}

// function CarouselComponent(){
//   //create elements
//   const caroDiv = document.createElement("div");
//   const leftButton = document.createElement("div");
//   const img1 = document.createElement("img");
//   const img2 = document.createElement("img");
//   const img3 = document.createElement("img");
//   const img4 = document.createElement("img");
//   const rightButton = document.createElement("div");

//   // add classes
//   caroDiv.classList.add("carousel");
//   leftButton.classList.add("left-button");
//   rightButton.classList.add("right-button");

//   // add content
//   img1.src("./assets/carousel/mountains.jpg")
//   img2.src("./assets/carousel/computer.jpg")
//   img3.src("./assets/carousel/trees.jpg")
//   img4.src("./assets/carousel/turntable.jpg")

//   //append
//   caroDiv.appendChild(leftButton);
//   caroDiv.appendChild(img1);
//   caroDiv.appendChild(img2);
//   caroDiv.appendChild(img3);
//   caroDiv.appendChild(img4);
//   caroDiv.appendChild(img5);

//   return caroDiv;
// }