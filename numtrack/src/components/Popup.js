import React, { useEffect, useRef, useState } from 'react';
const Popup = ({ setVal }) => {
    const [active, setActive] = useState(false);
    const [err, setErr] = useState(false);
    const num = useRef(null);


    useEffect(() => {
        setActive(true);
    }, []);

    useEffect(() => {
        if (err) {
            // Optionally reset error state after animation
            const timer = setTimeout(() => setErr(false), 500); // Match animation duration
            return () => clearTimeout(timer);
        }
    }, [err]);


    const handleClick = () => {
        const value = parseInt(num.current.value, 10);
        if (value >= 0 && value <= 150) {
            setVal(value);
            setActive(false);
        }else{
            setErr(true);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit} className={`absolute text-white h-1/2 m-20 md:m-0 md:h-full w-full 
        flex flex-col items-center justify-center gap-10 bg-black  z-50 opacity-70 text-opacity-100
         font-bold transition-transform duration-500 ${active ? 'ease-out scale-75' : 'ease-in scale-0'} `}>
            <span className={`text-xl md:text-5xl ${err ? 'text-red-600 animate-shake' : ''}`}>Enter initial number between 0 to 150</span>
            <input ref={num} className='w-20 py-1 rounded-lg md:w-40 md:h-16 text-black text-2xl md:text-5xl p-4' type='number' />
            <button onClick={handleClick} className='contrast-150 hover:bg-red-400 rounded-lg bg-red-500 px-4 py-2 w-20 md:w-40 md:h-16 text-2xl'>Ok</button>
        </form>
    )
}

export default Popup;