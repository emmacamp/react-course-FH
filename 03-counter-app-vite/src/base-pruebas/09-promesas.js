import { getHeroeById, getHeroeByOwner } from "./08-imp-exp";
// import heroe from "./data/heroes";

/* const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroeById(1);
    // resolve(heroe)
    reject('Heroe not found')
  }, 2000)
})


promesa
  .then((x) => console.log(x))
  .catch(err => console.warn(err)) */

export const getHeroByIdAsync = (id) => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);

      if (heroe) {
        resolve(heroe)

      } else {
        reject('Heroe not found hero with id: ' + id)

      }
    }, 1000)

  })

}
/* 
getHeroByIdAsync(1)
  .then(console.log)
  .catch(console.warn) */