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
container.style.margin = "5px";

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

const forma = document.getElementById("form");
const infoContainer = document.getElementById("info-container");

infoContainer.style.display = "flex";
infoContainer.style.flexDirection = "row";
infoContainer.style.margin = "5px"

function applyFormStyles(form) {
  form.style.textAlign = "center";
  form.style.backgroundColor = "blue";
  form.style.maxWidth = "275px";
  form.style.margin = "auto";
  form.style.position = "relative";
  form.style.display = "flex";
  form.style.flexDirection = "column";
}

function applyInputStyles(input) {
  input.style.padding = "5px";
  input.style.margin = "10px auto";
  input.style.display = "block";
  input.style.width = "80%";
}

function applyFormGroupStyles(formGroup) {
  formGroup.style.color = "white";
  formGroup.style.textAlign = "center";
}

function createInfoCard(info) {
  const card = document.createElement("div");
  card.className = "info-card";
  card.style.color = "white";
  card.style.width = "200px"; 
  card.style.padding = "20px";
  card.style.textAlign = "left";
  card.style.backgroundColor = "red";
  card.style.margin = "10px";
  card.style.borderRadius = "10px";

  const infoLines = info.split('\n');
  infoLines.forEach((line) => {
      const lineElement = document.createElement("div");
      lineElement.innerText = line.trim();
      card.appendChild(lineElement);
  });

  return card;
}

function displayInfo(info) {
  const infoCard = createInfoCard(info);
  infoContainer.appendChild(infoCard);
}

function DogForm() {
  const my_form = document.createElement("form");
  applyFormStyles(my_form);

  my_form.innerHTML = `
  <div class="form-group">
    <label for="Name">Name: </label>
    <input id="Name">
  </div>
  <div class="form-group">
    <label for="Age">Age: </label>
    <input id="Age">
  </div>
  <div class="form-group">
    <label for="Legs">Legs: </label>
    <input id="Legs">
  </div>
  <div class="form-group">
    <label for="Fur">Fur: </label>
    <input id="Fur">
  </div>
  <div class="form-group">
    <label for="Tail">Tail: </label>
    <input id="Tail">
  </div>
  <div class="form-group">
    <label for="Muzzle">Muzzle: </label>
    <input id="Muzzle">
    <button type="button" id="submitBtn">Submit</button>
  </div>
`;

  my_form.querySelectorAll(".form-group").forEach((group) => {
      applyFormGroupStyles(group);
  });

  my_form.querySelectorAll("input").forEach((input) => {
      applyInputStyles(input);
  });

  forma.innerHTML = "";
  forma.appendChild(my_form);

  const submitBtn = my_form.querySelector("#submitBtn");
    submitBtn.addEventListener("click", () => {
        const dogInfo = `
            Name: ${my_form.querySelector("#Name").value}
            Age: ${my_form.querySelector("#Age").value}
            Legs: ${my_form.querySelector("#Legs").value}
            Fur: ${my_form.querySelector("#Fur").value}
            Tail: ${my_form.querySelector("#Tail").value}
            Muzzle: ${my_form.querySelector("#Muzzle").value}
        `;
        displayInfo(dogInfo);
    });
}

function CatForm() {
  const my_form = document.createElement("form");
  applyFormStyles(my_form);

  my_form.innerHTML = `
  <div class="form-group">
    <label for="Name">Name: </label>
    <input id="Name">
  </div>
  <div class="form-group">
    <label for="Age">Age: </label>
    <input id="Age">
  </div>
  <div class="form-group">
    <label for="Legs">Legs: </label>
    <input id="Legs">
  </div>
  <div class="form-group">
    <label for="Fur">Fur: </label>
    <input id="Fur">
  </div>
  <div class="form-group">
    <label for="Tail">Tail: </label>
    <input id="Tail">
  </div>
  <div class="form-group">
    <label for="Whiskers">Whiskers: </label>
    <input id="Whiskers">
    <button type="button" id="submitBtn">Submit</button>
  </div>
`;

  my_form.querySelectorAll(".form-group").forEach((group) => {
      applyFormGroupStyles(group);
  });

  my_form.querySelectorAll("input").forEach((input) => {
      applyInputStyles(input);
  });

  forma.innerHTML = "";
  forma.appendChild(my_form);

  const submitBtn = my_form.querySelector("#submitBtn");
  submitBtn.addEventListener("click", () => {
    const catInfo = `
    Name: ${my_form.querySelector("#Name").value}
    Age: ${my_form.querySelector("#Age").value}
    Legs: ${my_form.querySelector("#Legs").value}
    Fur: ${my_form.querySelector("#Fur").value}
    Tail: ${my_form.querySelector("#Tail").value}
    Whiskers: ${my_form.querySelector("#Whiskers").value}
`;
      displayInfo(catInfo);
  });
}

function BirdForm() {
  const my_form = document.createElement("form");
  applyFormStyles(my_form);

  my_form.innerHTML = `
  <div class="form-group">
    <label for="Name">Name: </label>
    <input id="Name">
  </div>
  <div class="form-group">
    <label for="Age">Age: </label>
    <input id="Age">
  </div>
  <div class="form-group">
    <label for="Legs">Legs: </label>
    <input id="Legs">
  </div>
  <div class="form-group">
    <label for="Wings">Wings: </label>
    <input id="Wings">
  </div>
  <div class="form-group">
    <label for="Beak">Beak: </label>
    <input id="Beak">
    <button type="button" id="submitBtn">Submit</button>
  </div>
`;

  my_form.querySelectorAll(".form-group").forEach((group) => {
      applyFormGroupStyles(group);
  });

  my_form.querySelectorAll("input").forEach((input) => {
      applyInputStyles(input);
  });

  forma.innerHTML = "";
  forma.appendChild(my_form);

  const submitBtn = my_form.querySelector("#submitBtn");
  submitBtn.addEventListener("click", () => {
    const birdInfo = `
    Name: ${my_form.querySelector("#Name").value}
    Age: ${my_form.querySelector("#Age").value}
    Legs: ${my_form.querySelector("#Legs").value}
    Wings: ${my_form.querySelector("#Wings").value}
    Beak: ${my_form.querySelector("#Beak").value}
`;
      displayInfo(birdInfo);
  });
}

btnDogs.addEventListener("click", function () {
  DogForm();
});

btnCats.addEventListener("click", function () {
  CatForm();
});

btnBirds.addEventListener("click", function () {
  BirdForm();
});