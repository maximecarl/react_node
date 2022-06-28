import CharacterCard from "../components/characters/CharacterCard";
import Base from "./Base";

import characterImg from '../assets/images/PI.jpg';

const CHARACTER = {
    'name': 'Name',
    'img': characterImg,
    'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, incidunt consectetur.',
    'statistics': [
        {'name': 'Attaque', 'symbol': 'ATK', 'value': 40, 'color': 'red'},
        {'name': 'Defense', 'symbol': 'DEF', 'value': 190, 'color': 'blue'},
        {'name': 'Armure', 'symbol': <i class="fa fa-trash"></i>, 'value': 300, 'color': 'grey'},
    ]
}

const Home = () => {
    return (
        <Base title='Home'>
            <h2>Last characters</h2>
            <section className="app_grid app_characters_grid">
                <CharacterCard 
                    character={CHARACTER}
                />
                <CharacterCard 
                    character={CHARACTER}
                />
                <CharacterCard 
                    character={CHARACTER}
                />
                <CharacterCard 
                    character={CHARACTER}
                />
            </section>
        </Base>
    );
};
  
export default Home;