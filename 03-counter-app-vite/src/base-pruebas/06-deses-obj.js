// Desestruvturacion
// Asignacion Desestructurante

const persona = {
  name: 'Thony',
  age: 45,
  key: 'Ironman',
  latlng: {
    lat: 232342,
    lng: 212334
  }
};

// const { name: name1 } = persona;
// const { name, age, key } = persona;
// console.log(name1);

/* const returnPerson = (per) => {
  const { name, age, key } = per;

  return console.log(name, age, key)
}

returnPerson(persona) */

const userContext = ({ key, name, age, range = 'lol' }) => {

  return {
    nombreClave: key,
    anios: age,
    latlng: {
      lat: 232342,
      lng: 212334
    }
  }
};

const { nombreClave, anios, latlng: { lat, lng } } = userContext(persona);

console.log(nombreClave, anios, lat, lng);
