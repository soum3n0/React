import { useDispatch, useSelector } from "react-redux";
import { changeStatus } from "../utils/sideBarSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARH_SUGGESTIONS } from "../utils/constraints";
import { cacheSearch } from "../utils/searchSlice";

const Header = () => {
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState("");
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchResult = useSelector(store => store.search);

    const clickHandler = () => {
        dispatch(changeStatus());
    };

    useEffect(() => {
        const timer = setTimeout(() =>{ 
            if(searchResult[searchInput]){
                setSearchSuggestions(searchResult[searchInput]);
            }else{
                getSearchSuggestions();
            }
        },200);
        return () => {
            clearTimeout(timer);
        };
    }, [searchInput]);

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARH_SUGGESTIONS + searchInput, {
            headers: {
                'x-cors-api-key': 'temp_94232cce67beb712be1362cbfd52cc05'
            }
        });
        const json = await data.json();
        setSearchSuggestions(json[1]);
        dispatch(cacheSearch({[searchInput] : json[1]}));
    }

    return (
        <div className="flex justify-between items-center w-full px-4 py-2 z-20 bg-white sticky top-0">
            <div className="flex items-center">
                <img className="h-8 pr-4"
                    onClick={() => clickHandler()}
                    alt="hamburger" src="https://static.vecteezy.com/system/resources/thumbnails/021/190/402/small_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg" />
                <a href="/">
                    <img className="h-5"
                        alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" />
                </a>
            </div>

            <div className="w-1/2">
                <div className="flex ">
                    <div className="flex w-11/12 mr-2">
                        <input className="border border-gray-300 h-full w-11/12 rounded-l-full py-2 px-4" placeholder="Search"
                            value={searchInput} onChange={(e) => {
                                setSearchInput(e.target.value);
                            }}
                            onFocus={() => setShowSuggestions(true)}
                            onBlur={() => setShowSuggestions(false)}
                        />
                        <button className="border border-gray-300 bg-gray-100 p-2 px-5 rounded-r-full">
                            <img className="h-5" alt="search" src="https://www.svgrepo.com/show/7109/search.svg" />
                        </button>
                    </div>
                    <button className="p-2 rounded-full border border-gray-200">
                        <img className="h-5" alt="voice" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSk5cf1aU_Ue8wS_DCA5QQI4InOX-Cwj6c3g&s" />
                    </button>
                </div>
                {showSuggestions && (
                    <div className="absolute  w-2/5">
                        <ul className="py-4 bg-white rounded-2xl">
                            {searchSuggestions.map((sugg) => (
                                <li key={sugg} className="py-1 px-5 hover:bg-gray-200"
                                    // onClick={() => setSearchInput(sugg)}
                                    onMouseDown={(e) => {
                                        e.preventDefault();
                                        setSearchInput(sugg);
                                    }}
                                >{sugg}</li>
                            ))}
                        </ul>
                    </div>)}
            </div>
            <div className="flex gap-6 items-center mr-4">
                <button>
                    <img className="h-6" alt="upload" src="https://cdn.icon-icons.com/icons2/3237/PNG/512/social_media_chatting_tool_add_video_icon_197449.png" />
                </button>
                <button>
                    <img className="h-6" alt="notification" src="https://cdn.icon-icons.com/icons2/2807/PNG/512/notification_bell_icon_178938.png" />
                </button>
                <button>
                    <img className="h-8" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
                </button>
            </div>
        </div>
    )
}

export default Header;