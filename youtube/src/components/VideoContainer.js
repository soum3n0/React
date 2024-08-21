import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../utils/constraints";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/videoSlice";

const VideoContainer = () => {
    // const [videos, setVideos] = useState(null);
    // useEffect(() => {
    //     getVideos();
    // }, []);
    // const getVideos = async () => {
    //     const data = await fetch(YOUTUBE_VIDEO_API);
    //     const json = await data.json();
    //     setVideos(json.items);
    // };

    const dispatch = useDispatch();
    const videos = useSelector(store => store.videos.videos);
    useEffect(()=>{
        if(videos.length === 0){
            getVideos();
        }
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        dispatch(addVideos(json.items));
    };


    if (videos == null || videos.length === 0)
        return <h1>Loading..</h1>

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {videos.map((videoDetails) => (
                <VideoCard key={videoDetails?.id} data={videoDetails} />
            ))}
        </div>
    )
}
export default VideoContainer;