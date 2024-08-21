import { Link } from "react-router-dom";

const VideoCard = ({ data }) => {
    // console.log(data);
    const { title, channelTitle, thumbnails, publishedAt } = data?.snippet;
    const { viewCount } = data?.statistics;

    const publishedDate = new Date(publishedAt);
    const today = new Date();
    // console.log(publishedDate);
    // console.log(today);

    return (
        <Link className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.3333%-11px)] 2xl:w-[calc(25%-14px)]" to={"/watch?v=" + data.id}>
            <div className="flex gap-2 flex-col">
                <img className="object-fill rounded-xl" alt="thumbnail" src={thumbnails.medium.url} />
                <div className="flex">
                    <img className="h-10" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
                    <div className="flex flex-col mx-2">
                        <p className="font-semibold line-clamp-2 break-words">{title}</p>
                        <span className="text-gray-600">{channelTitle}</span>
                        <span className="text-gray-600">{viewCount} views - { } ago</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default VideoCard;