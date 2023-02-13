import heroes from "../data/heroes";

// import heroes from "./data/heroes"


/* 
const getHeroeById = (id) => {
  return heroes.find((heroe) => {
    if (heroe.id === id) {
      return true
    } else {
      return false
    }
  });
} */

// Find devuelve el primero que encuentra
export const getHeroeById = (id) => {
  return heroes.find(heroe => heroe.id === id);
}
// const getHeroeByOwner = (owner, id) => {
//   return heroes.filter(heroe => heroe.owner === owner).find(hero => hero.id === id);
// }

// Filter devuelve un nuevo array con todos los que cumplen con la condicion
export const getHeroeByOwner = (owner) => {
  return heroes.filter(heroe => heroe.owner === owner);
}

// console.log(getHeroeByOwner('DC'))
// console.log(owner)