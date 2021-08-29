import React from 'react';

import './Message.scss';

type MessageType = {
    avatar: string;
    name: string;
    message: string;
    time: string
}

function Message(props: MessageType) {
    return (
        <div className="user-message">
            <img className="user-message__avatar" src={props.avatar} alt="User avatar"/>
            <div className="user-message__box">
                <div className="user-message__name">{props.name}</div>
                <p className="user-message__text">{props.message}</p>
                <span className="user-message__time">{props.time}</span>
                <svg className="user-message__corner" width="9" height="20" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                        <path d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z"
                              fill="#000" filter="url(#a)"></path>
                        <path d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z"
                              fill="#FFFFFF" className="corner"></path>
                    </g>
                </svg>
            </div>
        </div>
    );
}

export default Message;
