import React, { useEffect, useState } from 'react';
import logo from '../flixgpt.png';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { Outlet, useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptPage } from '../utils/gptSlice';
import { lang, languageList } from '../utils/langConstrants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
    const user = useSelector(store => store.user);
    const gptButton = useSelector(store => store.gpt.gptPage);
    const langKey = useSelector(store => store.config.lang);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 0 && window.scrollY <= 600)
                setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Calculate background color based on scroll position
    const backgroundColor = `rgba(0, 0, 0, ${Math.min(scrollY / 600, 1)})`;

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                const { uid, displayName, email } = user;
                dispatch(addUser({ uid: uid, name: displayName, email: email }));
                navigate("/browse");
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });
        // unsubscribe when my component unmount
        return () => unsubscribe();
    }, []);

    const toggleGPT = () => {
        dispatch(toggleGptPage());
    }

    const changeLang = (e) => {
        dispatch(changeLanguage(e.target.value));
    }

    return (
        <div>
            <div className='px-8 sm:px-12 md:px-20 lg:px-32 bg-gradient-to-b from-black h-20 z-50 w-screen fixed flex justify-between items-center' style={{ backgroundColor }}>
                <img className='w-2/6 md:w-3/12 lg:w-1/6 contrast-125' src={logo} alt='logo' />
                <div className='flex gap-4'>
                    <select className='bg-gray-500 px-1 md:px-2 lg:px-3 py-1 rounded-lg' onChange={changeLang}>
                        {languageList.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.value}</option>)}
                    </select>
                    {user && <div className='text-white flex items-center'>
                        <button className='bg-red-700 hover:bg-red-500 px-4 py-2 rounded-lg' onClick={toggleGPT}>{gptButton ? lang[langKey].home : lang[langKey].askGptBtn}</button>
                        <span className='px-1 md:px-3 lg:px-5 font-bold'>Hello, {user.name}</span>
                        <button onClick={handleSignOut} className='hover:text-red-500 text-red-500 hover:underline underline hover:contrast-125'>{lang[langKey].signOut}</button>
                    </div>}
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Header