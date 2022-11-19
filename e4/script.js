/*const books = [
    {title: 1984, author: "George Orwell"},
    {title: "In Search of Lost Time", author: "Marcel Proust"},
    {title: "Don Quixote", author: "Miguel de Cervantes"},
    {title: "Moby Dick", author: "Herman Melville"}
]

function check_books(book){
    if(book.author == "George Orwell" || book.author == "Herman Melville"){
        return false;
    }
    return true;
}
const book_res = books.filter(check_books);

console.log(book_res);*/

function changeColor() {
    document.getElementById("content").style.color = "blue";
}

function updateContent() {
    document.getElementById("content").textContent = "Bye-Bye World";
}

let p1, p2;

function setup() {
  createCanvas(500, 500);
  p1 = new Particle(300, 300);
  p2 = new Box(300, 300);
  p3 = new Doritos(300, 300);
  p4 = new Paper(50, 20);
}

function draw() {
  background(0);
  p1.update();
  p1.show();
  p2.update();
  p2.show();
  p3.update();
  p3.show();
  p4.update();
  p4.show();
}