////1. ARRAY OPERATIONS

array = [1, 2, 3, 4];

//Head
const head = (array) => {
  const [a, b, c, d] = array;
  console.log(a);
}
//head(array);

//Tail
const tail = (array) => {
  const [, ...rest] = array;
  console.log(rest);
  return rest;
}
//tail(array);

//Init
const init = (array) => {
  const result = array.pop();
  console.log(array);
}
//init(array);

//Last
const last = (array) => {
  const arrayLast = array[array.length - 1];
  console.log(arrayLast);
};
//last(array);


////2. CONCAT

//SPREAD
const concatSpread = (array1, array2) => {
  const copy1 = [...array1];
  const copy2 = [...array2];
  const array3 = copy1.concat(array2);
  console.log(array3);
}
//concatSpread(array1, array2);

//OPCIONAL
const arr1 = ["Me llamo", "Lourdes Rodríguez"];
const arr2 = ["estudiante de", "LemonCode"];
const arr3 = ["y quiero un 10"];

const conctArrays = (...array) => {
  const result = array.reduce((result, array) => {
    return result.concat(array);
  }, []);

  console.log(result);

  return result;
}
//conctArrays(arr1, arr2, arr3);

////3.MERGE

//CLONE

let source1 = {
  name: "source",
  length: 20,
  width: 3,
}

let source2 = {
  name: "target",
  direction: "main street",
}

function clone(source) {
  let ejemplo1 = {
    ...source,
  }
  console.log(ejemplo1);
  return ejemplo1;
}
//clone(source1);

//MERGE

function merge(source, target) {
  let ejemplo2 = {
    ...target,
    ...source,
  }
  console.log(ejemplo2);
  return ejemplo2;
}
//merge(source1, source2);

////4.READ BOOKS

const books = [
  { title: "A sangre fría", isRead: true },
  { title: "El nombre de la rosa", isRead: true },
  { title: "Ensayo sobre la ceguera", isRead: true },
  { title: "La casa de los espíritus", isRead: true },
  { title: "La torre oscura", isRead: false },
]

function isBookRead(books, titleToSearch) {
  const book = books.find(book => book.title === titleToSearch);
  console.log(book);
  if (book == undefined) {
    return false
  }
  else {
    return book.isRead
  }
}
//const result = isBookRead(books,"La torre oscura" );
//console.log(result);

////5.SLOT MACHINES

class SlothMachine {
  constructor(){
    this.contador = 0;
  }
  play() {
    this.contador++;
    const slot1 = Math.random() < 0.5;
    const slot2 = Math.random() < 0.5;
    const slot3 = Math.random() < 0.5;
  
    if ([slot1, slot2, slot3].every(Boolean)){
      console.log("Congratulations!!!. You won " + this.contador + " coins!!");
      this.contador = 0;
    }
    else {
      console.log("Loser, keep playing!");
    }
  }
}
/* const tragaperrasPepe = new SlothMachine();
tragaperrasPepe.play();
tragaperrasPepe.play();
tragaperrasPepe.play();
tragaperrasPepe.play();
tragaperrasPepe.play();
tragaperrasPepe.play();
tragaperrasPepe.play();
tragaperrasPepe.play();
tragaperrasPepe.play();
tragaperrasPepe.play(); */