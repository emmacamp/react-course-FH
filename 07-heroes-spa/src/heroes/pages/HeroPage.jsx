import { useParams } from "react-router-dom";
import { getHeroesByPublisher } from "../helpers";

export const HeroPage = () => {
  const { id, ...rest} = useParams();

  const publisher = rest['*'].includes('marvel') ? 'Marvel Comics' : 'DC Comics';
  const heroes = getHeroesByPublisher(publisher);

  const hero = heroes.find(hero => hero.id === id);



  return (
    <div>
      <h1>Hero Page</h1>
      <div className="hero">
        <div className="hero__container">
          <div className="hero__container__image">
            <img src={`/assets/heroes/${id}.jpg`} alt="hero" />
          </div>
          <div className="hero__container__info">
            {
              hero && (
                <>
                  <h2>{hero.superhero}</h2>
                  <p>{hero.alter_ego}</p>
                  <p>{hero.first_appearance}</p>
                  <p>{hero.characters}</p>
                </>
              )
            }

          </div>
        </div>
      </div>
    </div>
  )
}
