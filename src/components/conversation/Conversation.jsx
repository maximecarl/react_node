import { useEffect, useState } from "react";
import Message from "../message/Message";
import ConversationInput from "./ConversationInput";

const currentUser = {'id': 1, 'firstname': 'Louis', 'lastname': 'Moulion'};

const Conversation = (props) => {
    const [nbMessages, setNbMessages] = useState(0);
    const [messages, setMessages] = useState(props.messages);

    const sendMessageFunction = (message) => {
        if (!message.length) {
            return;
        }
        
        let currentMessages = messages;
        currentMessages.push(
            {'id': 1234, 'text': message, 'user': currentUser, 'date': new Date()}
        );
        setMessages(currentMessages);
        setNbMessages(nbMessages + 1);
    }

    return (
        <div className="app_conversation">
            <div className="app_conversation-messages">
                {
                    messages.length
                        ? messages
                            .sort((a,b) => b.date - a.date)
                            .map(message => <Message
                                user={message.user} 
                                isCurrentUserMessage={message.user.id === currentUser.id}
                                {...message}
                            />)
                        : <span class="app_conversation-no-message">Aucune message pour l'instant</span>
                }
            </div>
            <ConversationInput 
                sendMessageFunction={sendMessageFunction}
            />
        </div>
    );
}

export default Conversation;