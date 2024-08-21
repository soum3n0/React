const Comment = ({ data }) => {
    const { name, text, reply } = data;
    return (
        <div>
            <div className="flex gap-4 p-3">
                <img className="w-12 h-12" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
                <div>
                    <p className="font-bold">{name}</p>
                    <p>{text}</p>
                </div>
            </div>
            <div className="mx-8 pl-8 border-l border-black">
                {/* n-level nesting */}
                {reply.map((replyComment, index) => <Comment key={index} data={replyComment} />)}
            </div>
        </div>
    )
};

export default Comment;