import { fuggvenyem } from "./main.js";
export function tesztFugvenyek() {
  {
    console.log("Teszt1");
    let a = 34;
    let b = 50;
    let vart = 2;
    console.assert(
      vart === fuggvenyem(a, b),
      "%o",
      `a=${a}, b=${b} ,eredmeny=${fuggvenyem(a, b)} várt=${vart}`,
      "A várt eredmény nem stimmel"
    );
  }
  {
    console.log("Teszt2");
    let a = 15;
    let b = 50;
    let vart = 5;
    console.assert(
      vart === fuggvenyem(a, b),
      "%o",
      `a=${a}, b=${b} ,eredmeny=${fuggvenyem(a, b)} várt=${vart}`,
      "A várt eredmény nem stimmel"
    );
  }
  {
    console.log("Teszt3");
    let a = -15;
    let b = 50;
    let vart = "Minkettő számnak pozitivnak kell lennie!";
    console.assert(
      vart === fuggvenyem(a, b),
      "%o",
      `a=${a}, b=${b} ,eredmeny=${fuggvenyem(a, b)} várt=${vart}`,
      "A várt eredmény nem stimmel"
    );
  }
  {
    console.log("Teszt4");
    let a = 0;
    let b = 5;
    let vart = "Nem lehet nulla!";
    console.assert(
      vart === fuggvenyem(a, b),
      "%o",
      `a=${a}, b=${b} ,eredmeny=${fuggvenyem(a, b)} várt=${vart}`,
      "A várt eredmény nem stimmel"
    );
  }
  {
    console.log("Teszt5");
    let a = 0;
    let b = 0;
    let vart = "Nem lehet nulla!";
    console.assert(
      vart === fuggvenyem(a, b),
      "%o",
      `a=${a}, b=${b} ,eredmeny=${fuggvenyem(a, b)} várt=${vart}`,
      "A várt eredmény nem stimmel"
    );
  }
  {
    console.log("Teszt6");
    let a = 5;
    let b = 5;
    let vart = 5;
    console.assert(
      vart === fuggvenyem(a, b),
      "%o",
      `a=${a}, b=${b} ,eredmeny=${fuggvenyem(a, b)} várt=${vart}`,
      "A várt eredmény nem stimmel"
    );
  }
  {
    console.log("Teszt7");
    let a = 3;
    let b = 4;
    let vart = 1;
    console.assert(
      vart === fuggvenyem(a, b),
      "%o",
      `a=${a}, b=${b} ,eredmeny=${fuggvenyem(a, b)} várt=${vart}`,
      "A várt eredmény nem stimmel"
    );
  }
  {
    console.log("Teszt8");
    let a = 24;
    let b = 16;
    let vart = 8;
    console.assert(
      vart === fuggvenyem(a, b),
      "%o",
      `a=${a}, b=${b} ,eredmeny=${fuggvenyem(a, b)} várt=${vart}`,
      "A várt eredmény nem stimmel"
    );
  }
  /* {
    console.log("Teszt4");
    let a = Number.MAX_SAFE_INTEGER;
    let b = 6;
    let vart =5;
    console.log(
      `a:${a}, b:${b}, várt:${vart}, eredmeny:${vart === fuggvenyem(a, b)}`
    );
  }*/
}
