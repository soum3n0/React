import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
    const status = useSelector(store => store.sideBar.status);
    return status && (
        <div className="w-1/5 bg-white px-1">
            <div className="border-b pb-4">
                <ul>
                    <li><Link to="/" className="flex items-center gap-6 py-2 px-2 hover:bg-gray-200 rounded-lg">
                        <svg enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="m12 4.44 7 6.09V20h-4v-6H9v6H5v-9.47l7-6.09m0-1.32-8 6.96V21h6v-6h4v6h6V10.08l-8-6.96z"></path></svg>
                        <span>Home</span>
                    </Link></li>
                    <li><Link to="#" className="flex items-center gap-6 py-2 px-2 hover:bg-gray-200 rounded-lg">
                        <svg height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path></svg>
                        <span>Shorts</span>
                    </Link></li>
                    <li><Link to="#" className="flex items-center gap-6 py-2 px-2 hover:bg-gray-200 rounded-lg">
                        <svg enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path></svg>
                        <span>Subscriptions</span>
                    </Link></li>
                </ul>
            </div>

            <div className="py-4 border-b">
                <h1 className="flex items-center gap-2 py-2 font-semibold">
                    <span>You</span>
                    <svg height="16" viewBox="0 0 16 16" width="16" focusable="false" aria-hidden="true"><path d="M4.97 12.65 9.62 8 4.97 3.35l.71-.71L11.03 8l-5.35 5.35-.71-.7z"></path></svg>
                </h1>
                <ul>
                    <li><Link to="#" className="flex items-center gap-6 py-2 px-2 hover:bg-gray-200 rounded-lg">
                        <svg height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M4 20h14v1H3V6h1v14zM6 3v15h15V3H6zm2.02 14c.36-2.13 1.93-4.1 5.48-4.1s5.12 1.97 5.48 4.1H8.02zM11 8.5a2.5 2.5 0 015 0 2.5 2.5 0 01-5 0zm3.21 3.43A3.507 3.507 0 0017 8.5C17 6.57 15.43 5 13.5 5S10 6.57 10 8.5c0 1.69 1.2 3.1 2.79 3.43-3.48.26-5.4 2.42-5.78 5.07H7V4h13v13h-.01c-.38-2.65-2.31-4.81-5.78-5.07z"></path></svg>
                        <span>Your Channel</span>
                    </Link></li>
                    <li><Link to="#" className="flex items-center gap-6 py-2 px-2 hover:bg-gray-200 rounded-lg">
                        <svg height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><g><path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path></g></svg>
                        <span>History</span>
                    </Link></li>
                    <li><Link to="#" className="flex items-center gap-6 py-2 px-2 hover:bg-gray-200 rounded-lg">
                        <svg height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M22 7H2v1h20V7zm-9 5H2v-1h11v1zm0 4H2v-1h11v1zm2 3v-8l7 4-7 4z"></path></svg>
                        <span>Playlists</span>
                    </Link></li>
                    <li><Link to="/" className="flex items-center gap-6 py-2 px-2 hover:bg-gray-200 rounded-lg">
                        <svg enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"></path></svg>
                        <span>Your Videos</span>
                    </Link></li>
                    <li><Link to="/" className="flex items-center gap-6 py-2 px-2 hover:bg-gray-200 rounded-lg">
                        <svg height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path></svg>
                        <span>Watch Later</span>
                    </Link></li>
                    <li><Link to="#" className="flex items-center gap-6 py-2 px-2 hover:bg-gray-200 rounded-lg">
                        <svg enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path></svg>
                        <span>Liked Videos`</span>
                    </Link></li>
                </ul>
            </div>

            <div>
                <h1 className="font-semibold py-4">Subscriptions</h1>
                <ul>
                    <li><Link to="/" className="flex items-center gap-6 py-2 px-2 hover:bg-gray-200 rounded-lg">
                        <img alt="logo" className="h-8 rounded-full" src="https://yt3.ggpht.com/al5a-TjybDtOQrBzpxpLkrG9uMTWpofw43Al81L5I9szAzZ8IutjqVVO8pH_RXb6CRim9lHMMw=s88-c-k-c0x00ffffff-no-rj" />
                        <span>Channel</span>
                    </Link></li>
                    <li><Link to="/" className="flex items-center gap-6 py-2 px-2 hover:bg-gray-200 rounded-lg">
                        <img alt="logo" className="h-8 rounded-full" src="https://yt3.ggpht.com/al5a-TjybDtOQrBzpxpLkrG9uMTWpofw43Al81L5I9szAzZ8IutjqVVO8pH_RXb6CRim9lHMMw=s88-c-k-c0x00ffffff-no-rj" />
                        <span>Channel</span>
                    </Link></li>
                    <li><Link to="/" className="flex items-center gap-6 py-2 px-2 hover:bg-gray-200 rounded-lg">
                        <img alt="logo" className="h-8 rounded-full" src="https://yt3.ggpht.com/al5a-TjybDtOQrBzpxpLkrG9uMTWpofw43Al81L5I9szAzZ8IutjqVVO8pH_RXb6CRim9lHMMw=s88-c-k-c0x00ffffff-no-rj" />
                        <span>Channel</span>
                    </Link></li>
                    <li><Link to="/" className="flex items-center gap-6 py-2 px-2 hover:bg-gray-200 rounded-lg">
                        <img alt="logo" className="h-8 rounded-full" src="https://yt3.ggpht.com/al5a-TjybDtOQrBzpxpLkrG9uMTWpofw43Al81L5I9szAzZ8IutjqVVO8pH_RXb6CRim9lHMMw=s88-c-k-c0x00ffffff-no-rj" />
                        <span>Channel</span>
                    </Link></li>
                    <li><Link to="/" className="flex items-center gap-6 py-2 px-2 hover:bg-gray-200 rounded-lg">
                        <img alt="logo" className="h-8 rounded-full" src="https://yt3.ggpht.com/al5a-TjybDtOQrBzpxpLkrG9uMTWpofw43Al81L5I9szAzZ8IutjqVVO8pH_RXb6CRim9lHMMw=s88-c-k-c0x00ffffff-no-rj" />
                        <span>Channel</span>
                    </Link></li>
                    <li><Link to="/" className="flex items-center gap-6 py-2 px-2 hover:bg-gray-200 rounded-lg">
                        <img alt="logo" className="h-8 rounded-full" src="https://yt3.ggpht.com/al5a-TjybDtOQrBzpxpLkrG9uMTWpofw43Al81L5I9szAzZ8IutjqVVO8pH_RXb6CRim9lHMMw=s88-c-k-c0x00ffffff-no-rj" />
                        <span>Channel</span>
                    </Link></li>
                </ul>
            </div>

            <div>
                <h1>Explore</h1>
                <ul>
                    <li>Trending</li>
                    <li>Shopping</li>
                    <li>Music</li>
                    <li>Movies</li>
                    <li>Live</li>
                    <li>Gaming</li>
                    <li>News</li>
                    <li>Sports</li>
                    <li>Courses</li>
                    <li>Fashion & Beauty</li>
                    <li>Podcasts</li>
                </ul>
            </div>
        </div>
    )
}
export default SideBar;