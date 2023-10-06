import react from 'react';
import { CharacterApi } from '../interfaces/rickRestApi';


export const CharactersCard = (character: CharacterApi) => {

    return (
        <section className="character-card">
            {/* Image */}
            <div className="character-card-img">
                <img src={character.image} alt="image" />
            </div>
            {/* Card Info */}
            <article className="character-card-info">

                <div className="character-card-info-first">
                    <h1 className='character-card-info-first-h1'>{character.name}</h1>
                    <span 
                        className={character.status === 'Alive' ? 
                            'character-card-info-first-status-status-alive'
                            : character.status === 'Dead' ?
                            'character-card-info-first-status-status-dead'
                            :
                            'character-card-info-first-status'
                            }>
                        {character.status} - {character.gender} 
                    </span>
                </div>

                <div className="character-card-info-second">
                    <span className="character-card-info-location-question">Last known location:</span>
                    <h3 className="character-card-info-second-location-answer">{character.location.name}</h3>
                </div>

                <div className="character-card-info-thrid-species">
                    <span className="character-card-info-thrid-species-question">
                        Species:
                    </span>
                    <h3 className="character-card-info-thrid-species-answer">
                        {character.species}
                    </h3>
                </div>

            </article>
        </section>
    )

}

