import React, { useEffect, useState } from 'react';
import logo from '../flixgpt.png';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { lang, languageList } from '../utils/langConstrants';
import { changeLanguage } from '../utils/configSlice';
import usePasswordChange from '../Hooks/usePasswordChange';

const Header = () => {
    const user = useSelector(store => store.user);
    const langKey = useSelector(store => store.config.lang);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [scrollY, setScrollY] = useState(0);
    const [aiPage, setAiPage] = useState(false);
    const [accountDetails, setAccountDetails] = useState(false);
    const [activeSettings, setActiveSettings] = useState(false);

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
            if (accountDetails) setAccountDetails(false);
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
        aiPage ? navigate("/browse") : navigate("/flixai");
        setAiPage(!aiPage);
    }

    const changeLang = (e) => {
        dispatch(changeLanguage(e.target.value));
    }

    const { requestPasswordChange } = usePasswordChange();
    const handlePasswordReset = () => {
        requestPasswordChange();
    }

    const handleClick =  () => {
        if (activeSettings) {
            setActiveSettings(false);
        }
        setAccountDetails(!accountDetails)
    }

    const handleBlur = () => {
        if (accountDetails) {
            setAccountDetails(false);
            if (activeSettings) {
                setActiveSettings(false);
            }
        }
    };

    return (
        <div>
            <div className='px-8 sm:px-12 md:px-20 lg:px-20 bg-gradient-to-b from-black h-20 z-50 w-screen fixed flex justify-between items-center' style={{ backgroundColor }}>
                <Link className='w-2/6 md:w-3/12 lg:w-1/6' to={user ? "/browse" : "/"}><img className=' contrast-125' src={logo} alt='logo' /></Link>
                <div className='flex gap-4'>
                    {user && <div className='flex items-center relative'>
                        <button className='bg-red-700 hover:bg-red-500 px-4 py-2 mr-8 text-white rounded-lg mb-1' onClick={toggleGPT}>{aiPage ? lang[langKey].home : lang[langKey].askGptBtn}</button>

                        <i title='Your Account' onClick={handleClick} onBlur={handleBlur} tabIndex="0" className="fa-solid fa-circle-user text-3xl text-white cursor-pointer hover:text-gray-400"></i>

                        {accountDetails && <ul onMouseDown={(e) => e.preventDefault()} className='bg-black absolute top-14 right-0 p-6 rounded-lg min-w-max flex flex-col gap-2 text-white text-center border border-white'>
                            <li className='font-bold text-center'>Hi! {user.name}</li>
                            <li className='text-center'>{user.email}</li>
                            <li onClick={() => setActiveSettings(!activeSettings)} className='flex gap-2 items-center justify-center cursor-pointer hover:text-gray-400'>
                                <span>Settings</span><i className="fa-solid fa-caret-down"></i>
                            </li>

                            {activeSettings && <ul className='bg-black absolute right-full top-2/3 w-auto p-4 rounded-lg flex flex-col gap-2 border border-white'>
                                <li onClick={handlePasswordReset} className='cursor-pointer hover:text-red-500'>Reset Password <i className="fa-solid fa-key"></i></li>
                                <li className='flex gap-2 items-center mx-auto'>
                                    <span>Language</span>
                                    <select className='p-1 cursor-pointer bg-black border border-gray-500 text-gray-500 rounded-lg' onChange={changeLang}>
                                        {languageList.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.value}</option>)}
                                    </select>
                                </li>
                            </ul>}

                            <li onClick={handleSignOut} className='cursor-pointer text-red-500 contrast-125 hover:text-red-400 flex gap-2 items-center justify-center'>
                                <span>Logout</span>
                                <i className="fa-solid fa-right-from-bracket text-xl"></i>
                            </li>
                        </ul>}

                        { }
                    </div>}
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Header