let color = 'black'

function populateboard(size) {
    let box = document.querySelector('.box')
    let square = box.querySelectorAll('div');
    square.forEach((div) =>div.remove());
    box.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  box.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    let amount=size*size;
    for (let i = 0; i <amount; i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "white";
        square.classList.add('grid-cell');
        square.addEventListener('mouseover',colorSquare)
        box.insertAdjacentElement('beforeend', square);
    }
}

    populateboard(16);
    function changeSize(input) {
        
        populateboard(input);
    }
   function colorSquare() {
    if (color === "random") {
        
        this.style.backgroundColor=`hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    
    else{
           this.style.backgroundColor = color;
    }
    }

function colorChoice(choice) {
    color=choice;
}
function resetBoard() {
    let board = document.querySelector(".box");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "white"));
  }
  document.querySelector("body").addEventListener("click", (e) => {
    click = !click;
  });
