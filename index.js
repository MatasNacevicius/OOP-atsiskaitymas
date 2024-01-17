class Gyvunai {
  constructor(name, age, legs) {
    this.name = name;
    this.age = age;
    this.legs = legs;
  }
}
class Katinai extends Gyvunai {
  constructor(name, age, legs, fur, tail, whiskers) {
    super(name, age, legs);
    this.fur = fur;
    this.tail = tail;
    this.whiskers = whiskers;
  }
}
class Pauksciai extends Gyvunai {
  constructor(name, age, legs, wings, beak) {
    super(name, age, legs);
    this.wings = wings;
    this.beak = beak;
  }
}
class Sunys extends Gyvunai {
  constructor(name, age, legs, fur, tail, muzzle) {
    super(name, age, legs);
    this.fur = fur;
    this.tail = tail;
    this.muzzle = muzzle;
  }
}
const container = document.getElementById("container");
container.style.display = "flex";
container.style.flexDirection = "row";
container.style.alignItems = "center";
container.style.justifyContent = "center";
container.style.marginTop = "20px";

function createButton(text) {
  const button = document.createElement("button");
  button.innerText = text;
  button.style.padding = "15px 30px";
  button.style.fontSize = "16px";
  button.style.marginRight = "10px";
  return button;
}

const btnDogs = createButton("Dogs");
const btnCats = createButton("Cats");
const btnBirds = createButton("Birds");

container.append(btnDogs, btnCats, btnBirds);
