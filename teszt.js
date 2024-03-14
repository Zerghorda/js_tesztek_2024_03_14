import { fuggvenyem } from "./main.js";
export function tesztFugvenyek() {
  {
    console.log("Teszt1");
    let a = 34;
    let b = 50;
    let vart = 2;
    console.log(
      `a:${a}, b:${b}, várt:${vart}, eredmeny:${vart === fuggvenyem(a, b)}, függvény eredmény:${fuggvenyem(a,b)}`
    );
  }
  {
    console.log("Teszt2");
    let a = 15;
    let b = 50;
    let vart = 5;
    console.log(
      `a:${a}, b:${b}, várt:${vart}, eredmeny:${vart === fuggvenyem(a, b)}, függvény eredmény:${fuggvenyem(a,b)}`
    );
  }
 /* {
    console.log("Teszt3");
    let a = 34.9;
    let b = 50;
    let vart = "hiba";
    console.log(
      `a:${a}, b:${b}, várt:${vart}, eredmeny:${vart === fuggvenyem(a, b)}`
    );
  }*/
 /* {
    console.log("Teszt4");
    let a = 0;
    let b = 5;
    let vart = "hiba";
    console.log(
      `a:${a}, b:${b}, várt:${vart}, eredmeny:${vart === fuggvenyem(a, b)}`
    );
  }*/
 /* {
    console.log("Teszt4");
    let a = 0;
    let b = 0;
    let vart = 0;
    console.log(
      `a:${a}, b:${b}, várt:${vart}, eredmeny:${vart === fuggvenyem(a, b)}`
    );
  }*/
}
