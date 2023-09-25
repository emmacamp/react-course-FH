import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import queryString from 'query-string'
import getHeroesByName from "../helpers/getHeroesByName";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  
  const { q = '' } = queryString.parse(location.search)
  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: q
  });
  
  const heroes = getHeroesByName(q);

  const showSearch = (q === '');
  const showError = (heroes.length === 0 && q !== '');


  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchText}`)

    console.log(heroe);

    setHeroes(heroe);
    onResetForm();
  }


  return (
    <div className="">
      <h1 className="text-2xl">Search Page</h1>
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input type="text" placeholder="Find your hero" className="form-control" name="searchText" autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button type="submit" className="btn btn-primary mt-1 text-black">
              Search...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr className="pb-2" />
          <div className="alert alert-primary" style={{ display: showSearch ? '' : 'none' }}>
            Search a hero
          </div>

          <div className="alert alert-danger" style={{ display: showError ? '' : 'none' }}>
            There is no a hero with <b>{q}</b>
          </div>

          {
            heroes.map(hero => (
              <HeroCard
                key={hero.id}
                {...hero}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
