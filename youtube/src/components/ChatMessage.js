import React from 'react'

const ChatMessage = ({ name, comment }) => {
    return (
        <div className='flex gap-2'>
            <img className="h-8" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            <div>
                <span className='font-bold mr-2'>{name}</span>
                <span>{comment}</span>
            </div>
        </div>
    )
}

export default ChatMessage