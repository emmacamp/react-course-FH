import { Link } from "react-router-dom"

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <div className="card ms-3" style={{ maxWidth: 400 }}>
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img
                            src={`/heroes/${id}.jpg`}
                            className="card-img"
                            alt={superhero}

                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                (alter_ego !== characters)
                                && <p className="card-text">{characters}</p>
                            }
                            <small className="text-end">{publisher}</small>
                            <p className="card-text mb-3">
                                <small className="text-muted">{first_appearance}</small>
                            </p>
                            <Link className="bg-blue-700 px-5 text-white p-2 rounded-full hover:bg-blue-800" to={`/hero/${id}`}>
                                More info...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
