const ButtonList = () => {
    return (
        <div className="relative">
            <div className="flex gap-3 mb-6 mt-2 whitespace-nowrap overflow-x-scroll scroll-smooth hide-scrollbar">
                <button
                    onClick={() => {

                    }}
                    className="absolute top-0 left-0 z-10 bg-gray-300 p-2 rounded-full shadow-md">
                    <img alt="left-arrow" className="h-4" src="https://icon-library.com/images/side-arrow-icon/side-arrow-icon-9.jpg" />
                </button>
                <button className="font-medium px-3 py-1 rounded-lg bg-gray-200">All</button>
                <button className="font-medium px-3 py-1 rounded-lg bg-gray-200">Music</button>
                <button className="font-medium px-3 py-1 rounded-lg bg-gray-200">Mixes</button>
                <button className="font-medium px-3 py-1 rounded-lg bg-gray-200">T-Series</button>
                <button className="font-medium px-3 py-1 rounded-lg bg-gray-200">Rabindra Sangeet</button>
                <button className="font-medium px-3 py-1 rounded-lg bg-gray-200">All</button>
                <button className="font-medium px-3 py-1 rounded-lg bg-gray-200">Music</button>
                <button className="font-medium px-3 py-1 rounded-lg bg-gray-200">Mixes</button>
                <button className="font-medium px-3 py-1 rounded-lg bg-gray-200">T-Series</button>
                <button className="font-medium px-3 py-1 rounded-lg bg-gray-200">Rabindra Sangeet</button>
                <button className="font-medium px-3 py-1 rounded-lg bg-gray-200">All</button>
                <button className="font-medium px-3 py-1 rounded-lg bg-gray-200">Music</button>
                <button className="font-medium px-3 py-1 rounded-lg bg-gray-200">Mixes</button>
                <button className="font-medium px-3 py-1 rounded-lg bg-gray-200">T-Series</button>
                <button className="font-medium px-3 py-1 rounded-lg bg-gray-200">Rabindra Sangeet</button>
                <button className="absolute top-0 right-0 z-10 bg-gray-300 p-2 rounded-full shadow-md">
                    <img className="h-4" alt="right-arrow" src="https://www.clipartmax.com/png/middle/399-3995358_text-box-on-the-right-side-of-the-arrow-comments-text-box.png" /></button>
            </div>
        </div>
    )
}

export default ButtonList;