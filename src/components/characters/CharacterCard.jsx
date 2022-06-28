import { useState } from 'react';
import CharacterStatistics from './CharacterStatistics';

const CharacterCard = (props) => {
    const [character, setCharacter] = useState(props.character);

    return (
        <div className="app_card app_character">
            <img width='300px' height='500px' src={character.img} alt={character.name} title={character.name}/>
            <div className="content">
                <div className='content-part'>
                    <h3>{character.name}</h3>
                    <p>{character.description}</p>
                </div>

                <div className='content-part'>
                    <CharacterStatistics statistics={character.statistics}/>
                </div>
            </div>
        </div>
    )
}

export default CharacterCard;