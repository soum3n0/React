import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar, openSideBar } from "../utils/sideBarSlice";
import { useSearchParams } from "react-router-dom";
import commentsData from "../utils/mockCommentsData";
import Comment from "./Comment";
import LiveChat from "./LiveChat";

const VideoScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0,0);
        dispatch(closeSideBar());

        return ()=> dispatch(openSideBar());
    }, []);

    const [videoId] = useSearchParams();

    return (
        <div className="flex gap-8 w-full p-4">
            <div className="">
                <iframe className="rounded-xl" width="850" height="480"
                    src={"https://www.youtube.com/embed/" + videoId.get('v')}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>

                <div className="mt-4">
                    <h1 className="font-bold text-xl mb-2">Comments</h1>
                    {commentsData.map((comment, index) => (
                        <Comment key={index} data={comment} />
                    ))}
                </div>
            </div>
            <div className="border border-gray-300 rounded-xl p-4 h-screen w-full overflow-y-scroll flex flex-col-reverse">
                <LiveChat/>
            </div>
        </div>
    )
}

export default VideoScreen;