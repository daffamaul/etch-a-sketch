const container = document.querySelector(".container");
const changeSquares = document.querySelector("#squares");
const erase = document.querySelector("#erase");

const createSquares = function () {
  let numberOfSquares = Number.parseInt(
    prompt("Please input number of squares [1-100]: ")
  );

  if (numberOfSquares < 1 || numberOfSquares > 100)
    return alert("Please input number [1-100]");

  container.replaceChildren("");

  for (let i = 1; i <= numberOfSquares; i++) {
    const coll = document.createElement("div");

    coll.classList.add("coll");
    coll.style.width = `${960 / numberOfSquares}px`;
    coll.style.border = "1px solid black";

    for (let j = 1; j <= numberOfSquares; j++) {
      const cell = document.createElement("div");

      cell.classList.add("cell");
      cell.style.width = `${960 / numberOfSquares}px`;
      cell.style.height = `${960 / numberOfSquares}px`;
      cell.style.border = "1px solid black";

      coll.appendChild(cell);
    }

    container.appendChild(coll);
  }

  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell) => {
    let getRandomRgb = () => Math.floor(Math.random() * 255);

    cell.onmousemove = () =>
      (cell.style.backgroundColor = `rgb(${getRandomRgb()} ${getRandomRgb()} ${getRandomRgb()})`);

    erase.addEventListener(
      "click",
      () => (cell.style.backgroundColor = "rgb(255 255 255)")
    );
  });
};

changeSquares.addEventListener("click", createSquares);
