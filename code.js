
 const coin = {
  state: 0,
  flip: function () {
    // 1. Randomly set your coin object's "state" property to be either
    //    0 or 1: use "this.state" to access the "state" property on this object.
    const coinFlip = Math.floor(Math.random() * 2);
    this.state = coinFlip
    return this.state
  },
  toString: function () {
    // 2. Return the string "Heads" or "Tails", depending on whether
    //    "this.state" is 0 or 1.
    // if state = 0
    this.flip()
    console.log(this.state)
    if (this.state === 0) {
    // then return "Heads"
      return "Heads"
    }
    // otherwise return "Tails"
    else if (this.state === 1) {
      return "Tails"
    }
  },
  toHTML: function () {
    const image = document.createElement("img");
    // 3. Set the properties of this image element to show either face-up
    //    or face-down, depending on whether this.state is 0 or 1.
    //    You can use the heads and tails images inside of the "images" folder
    this.toString()
    // if this.state is 0 then use the "Heads" image.src =  
    if (this.state === 0) {
      image.src = "images/heads.png"
    }
    // if this.state is 1 then use the "Tails" image
    else {
      image.src = "images/tails.png"
    }
    return image;
  },
};

function display20Flips() {
  const results = [];
  // 4. Use a loop to flip the coin 20 times, each time displaying the result of the flip as a string on the page.  After your loop completes, return an array with the result of each flip.
  const {body} = document;
  const ul = document.createElement("ul");
  body.appendChild(ul);
  // create a for loop that flips the coin 20 times
      for (let i = 1; i <= 20; i += 1) {
      const li = document.createElement("li");
      ul.appendChild(li);
      coin.toHTML();
      if (coin.state === 0) {
        results.push("Heads")
        li.textContent = `${i}: Heads`
      }
      else {
        results.push("Tails")
        li.textContent = `${i}: Tails`
      }
        }
        return results;
}
    display20Flips();
function display20Images() {
  const results = [];
  // 5. Use a loop to flip the coin 20 times, and display the results of each flip as an image on the page.  After your loop completes, return an array with result of each flip.
  const {body} = document;
    for (let i = 1; i <= 20; i += 1) {
      const image = coin.toHTML()
      body.appendChild(image)
      console.log(coin.toHTML());

    }
    return results;
}
console.log(display20Images());