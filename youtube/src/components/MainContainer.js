import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = ()=>{
    const status = useSelector(store => store.sideBar.status);
    return (
        <div className={status ? 'w-4/5' : 'w-full px-4'}>
            <ButtonList/>
            <VideoContainer/>
        </div>
    )
}
export default MainContainer;