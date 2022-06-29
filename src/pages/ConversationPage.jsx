import Conversation from '../components/conversation/Conversation';
import Base from './Base';

const messages = [
    {'id': 1, 'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deserunt illum culpa, optio, distinctio perspiciatis veritatis nobis dolorum libero, quis reprehenderit ratione? Eligendi suscipit praesentium tempora incidunt facilis ut omnis?', 'user': {'id': 1, 'firstname': 'Louis', 'lastname': 'Moulion'}, 'date': new Date('2022-06-28 16:00')},
    {'id': 2, 'text': 'Text 2', 'user': {'id': 1, 'firstname': 'Louis', 'lastname': 'Moulion'}, 'date': new Date('2022-06-28 16:02')},
    {'id': 3, 'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deserunt illum culpa, optio, distinctio perspiciatis veritatis nobis dolorum libero, quis reprehenderit ratione?', 'user': {'id': 2, 'firstname': 'Anthony', 'lastname': 'Arjona'}, 'date': new Date('2022-06-28 16:03')},
    {'id': 6, 'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deserunt illum culpa, optio, distinctio perspiciatis veritatis nobis dolorum libero.', 'user': {'id': 2, 'firstname': 'Anthony', 'lastname': 'Arjona'}, 'date': new Date('2022-06-28 16:13')},
    {'id': 4, 'text': 'Mozarella', 'user': {'id': 2, 'firstname': 'Anthony', 'lastname': 'Arjona'}, 'date': new Date('2022-06-28 16:05')},
    {'id': 8, 'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deserunt illum culpa, optio, distinctio perspiciatis veritatis nobis dolorum libero, quis reprehenderit ratione? Eligendi suscipit praesentium tempora incidunt facilis ut omnis?', 'user': {'id': 2, 'firstname': 'Anthony', 'lastname': 'Arjona'}, 'date': new Date('2022-06-28 17:00')},
    {'id': 5, 'text': 'Mozarella ?', 'user': {'id': 1, 'firstname': 'Louis', 'lastname': 'Moulion'}, 'date': new Date('2022-06-28 16:12')},
    {'id': 20, 'text': 'De fou', 'user': {'id': 3, 'firstname': 'Maxime', 'lastname': 'Carluer'}, 'date': new Date('2022-06-28 16:13')},
    {'id': 7, 'text': 'Text 7', 'user': {'id': 1, 'firstname': 'Louis', 'lastname': 'Moulion'}, 'date': new Date('2022-06-28 16:18')},
];

const ConversationPage = (props) => {
    return (
        <Base title='Conversation'>
            <h2>Conversation</h2>
            <section className="app_grid">
                <Conversation
                    messages={messages}
                />
            </section>
        </Base>
    );
}

export default ConversationPage;