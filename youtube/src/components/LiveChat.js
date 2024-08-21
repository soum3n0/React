import React, { useEffect } from 'react';
import ChatMessage from './ChatMessage';
import { randomName, randomComment } from '../utils/mockChatData';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';


const LiveChat = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const i = setInterval(() => {
            dispatch(addMessage({
                name: randomName(),
                comment: randomComment(),
            }))
        }, 1000);

        return ()=> clearInterval(i);
    }, []);

    const chats = useSelector(store => store.liveChat.liveChats);

    return (
        <div className='flex flex-col-reverse gap-2'>
            {chats.map((chatDetais, index)=>(
                <ChatMessage key={index} name={chatDetais.name} comment={chatDetais.comment}/>
            ))}
        </div>
    )
}

export default LiveChat