const MessageUser = (props) => {
    return (
        <div className="app_message-user">
            {
                props.isCurrentUserMessage
                ? 'Moi'
                : <>{props.firstname} {props.lastname}</>
            }
        </div>
    );
}

export default MessageUser;