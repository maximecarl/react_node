import MessageUser from "./MessageUser";

const Message = (props) => {
    const {user, ...message} = props;

    const transformDatetoStr = (date) => {
        if (!date instanceof Date) {
            return date;
        }
        let day = date.getDate();
        if (day < 10) {
            day = '0' + day;
        }
        let month = date.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }
        let year = date.getFullYear();
        let hours = date.getHours();
        if (hours < 10) {
            hours = '0' + hours;
        }
        let minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    }

    return (
        <div className={['app_message', (message.isCurrentUserMessage ? 'currentUserMessage' : '')].join(' ')}>
            <MessageUser {...user} isCurrentUserMessage={message.isCurrentUserMessage}/>
            <div className="app_message-content">{message.text}</div>
            <div className="app_message-date">{transformDatetoStr(message.date)}</div>
        </div>
    )
}

export default Message;