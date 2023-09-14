import React from 'react'
import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher);

    return (

        <>
            <div className="box">

                {
                    heroes.map(hero => (
                        <HeroCard key={hero.id} {...hero} />
                    ))

                }
            </div>

        </>
    )
}
