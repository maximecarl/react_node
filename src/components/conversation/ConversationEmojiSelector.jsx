import { useEffect } from 'react';
import { useRef, useState } from 'react';
import icon_emoji from '../../assets/images/icon_emoji.png';

const emojis = ['🙂', '😇', '😥', '👍', '👎', '🖕', '🤬'];
const ConversationEmojiSelector = (props) => {
    const ref = useRef();
    useEffect(() => {
        const handleClick = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
            setClassPopup('hidden');
          }
        };
    
        document.addEventListener('click', handleClick);
    
        return () => {
          document.removeEventListener('click', handleClick);
        };
      }, [ref]);

    const [classPopup, setClassPopup] = useState('hidden');

    const handleAddEmoji = event => {
        props.handleClick(event.target.innerHTML);
    }

    const togglePopup = event => {
        setClassPopup(classPopup ? '' : 'hidden');
    }

    return (
        <div ref={ref} className='app_conversation-emoji-selector'>
            <div className={'app_conversation-emoji-selector-popup ' + classPopup}>
                {emojis.map(emoji => <span className='emoji' onClick={handleAddEmoji}>{emoji}</span>)}
            </div>
            <img src={icon_emoji} className='icon' onClick={togglePopup}/>
        </div>
    );
}

export default ConversationEmojiSelector;