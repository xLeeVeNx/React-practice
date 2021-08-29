import React from 'react';
import Message from './Message';

const messageData = {
    avatar: 'https://sun9-59.userapi.com/impg/GxrXjdZWUpeEGFoMllUyfs7gy_JwP3WfxgctCQ/26qGo2b1fnA.jpg?size=1545x1545&quality=96&sign=e02cbc09be30994bc919e805fe9bd258&type=album',
    name: 'Damil',
    message: 'Домашку сделал?',
    time: '21:37',
};

function HW1() {
    return (
        <div>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
        </div>
    );
}

export default HW1;
