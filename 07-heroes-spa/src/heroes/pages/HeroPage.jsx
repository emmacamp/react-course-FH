import { useParams } from "react-router-dom";
import { getHeroById, getHeroesByPublisher } from "../helpers";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const HeroPage = () => {
  const { id, ...rest} = useParams();

  console.log(rest);
  
  // const publisher = rest['*'].includes('marvel') ? 'Marvel Comics' : 'DC Comics';
  const returns = rest['*'].includes('marvel') ? '/marvel' : '/dc';
  // const heroes = getHeroesByPublisher(publisher);
  
  const hero = getHeroById(id);
  
  
  if (!hero) {
    return <Navigate to='/marvel' />
  }


  const goBack = () => {
    window.history.length <= 2 ? window.location.href = returns : window.history.back();
  }


  return (
    <div className="animate__animated  animate__backInLeft">
      <h1>Hero Page</h1>
      <div className="hero justify-center flex">
        <div className="hero__container">
          <div className="w-72">
            <img src={`/heroes/${id}.jpg`} alt="hero" />
          </div>
          <div className="border-3 p-3 w-fit ">
            {
              hero && (
                <>
                  <h2><span className="fw-bold">Superhero: </span>{hero.superhero}</h2>
                  <p><span className="fw-bold">Alter ego: </span>{hero.alter_ego}</p>
                  <p><span className="fw-bold">First Appearance: </span>{hero.first_appearance}</p>
                  <p><span className="fw-bold">Characters: </span>{hero.characters}</p>
                </>
              )}
          </div>
          <button onClick={goBack} className="btn btn-primary m-2">Go Back</button>
        </div>
      </div>
    </div>
  )
}
