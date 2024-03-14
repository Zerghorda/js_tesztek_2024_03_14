import { tesztFugvenyek } from "./teszt.js";
export function fuggvenyem(a, b) {
  if (a === 0 || b === 0) {
    return "Nem lehet nulla!";
  }
  if (a < 0 || b < 0) {
    return "Minkettő számnak pozitivnak kell lennie!"
  }
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
}
tesztFugvenyek();
//console.log(fuggvenyem(9, 6));
