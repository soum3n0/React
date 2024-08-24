import React, { useRef, useState } from 'react';
import { validateEmail, validatePassword } from '../utils/formValidation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth} from "../utils/firebase";
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { lang } from '../utils/langConstrants';
import LoadingPage from './LoadingPage';
import { NETFLIX_BG_POSTER } from '../utils/constrants';
import usePasswordChange from '../Hooks/usePasswordChange';


const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [invalidName, setInvalidName] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch();
    const langKey = useSelector(store => store.config.lang);

    const toggle = () => {
        setIsLogin(!isLogin);
        if (errorMessage) setErrorMessage(null);
    }

    const handleSubmit = () => {
        setIsLoading(true);
        const isEmailValid = validateEmail(email.current.value);
        if (!isEmailValid) {
            setInvalidEmail(true);
        } else {
            if (invalidEmail) setInvalidEmail(false);
        }
        const isPasswordValid = validatePassword(password.current.value);
        if (!isPasswordValid) {
            setInvalidPassword(true);
        } else {
            if (invalidPassword) setInvalidPassword(false);
        }
        if (!isLogin && !name.current.value) {
            setInvalidName(true);
            setIsLoading(false);
            return;
        }

        if (!isEmailValid || !isPasswordValid) {
            setIsLoading(false);
            return;
        }
        if (!isLogin) {
            // Sign-up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                    }).then(() => {
                        // Profile updated!
                        const { uid, displayName, email } = auth.currentUser;
                        dispatch(addUser({ uid: uid, name: displayName, email: email }));
                        setIsLoading(false);
                    }).catch((error) => {
                        // An error occurred
                        setErrorMessage("Error : " + error.code);
                        setIsLoading(false);
                    });
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    // const errorMessage = error.message;
                    setErrorMessage("Error : " + error.code);
                    setIsLoading(false);
                });
        } else {
            // Sign-in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then(() => {
                    // Signed in 
                    // const user = userCredential.user;
                    if (errorMessage) setErrorMessage(null);
                    setIsLoading(false);
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    // const errorMessage = error.message;
                    setErrorMessage("Error : " + error.code);
                    setIsLoading(false);
                });
        }
    }

    const { requestPasswordChange } = usePasswordChange();
    const handlePasswordReset = () => {
        // requestPasswordChange();
    }

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()} className='w-full sm:w-2/3 md:w-1/2 lg:w-1/3 z-10 px-16 py-12 bg-black bg-opacity-85 rounded-lg absolute text-white font-semibold flex flex-col gap-10 top-20 left-1/2 -translate-x-1/2' >
                <span className='font-bold text-4xl'>{isLogin ? lang[langKey].signIn : lang[langKey].signUp}</span>
                <div className='flex flex-col gap-4 items-center'>
                    {!isLogin &&
                        <div className='w-full'>
                            <input type='text' ref={name} className='w-full bg-gray-900 bg-opacity-50 border border-gray-700 p-4 rounded-lg' placeholder={lang[langKey].inputNamePlaceholder} />
                            {invalidName && <p className='text-red-500 text-sm pl-4 animate-shake'>{lang[langKey].inputNameErrorMessage}</p>}
                        </div>
                    }
                    <div className='w-full'>
                        <input type='text' ref={email} className='w-full bg-gray-900 bg-opacity-50 border border-gray-700 p-4 rounded-lg' placeholder={lang[langKey].inputEmailPlaceholder} />
                        {invalidEmail && <p className='text-red-500 text-sm pl-4 animate-shake'>{lang[langKey].inputEmailErrorMessage}</p>}
                    </div>
                    <div className='w-full'>
                        <input type='password' ref={password} className='w-full bg-gray-900 bg-opacity-40 border border-gray-700 p-4 rounded-lg' placeholder={lang[langKey].inputPasswordPlaceholder} />
                        {invalidPassword && <p className='text-red-500 text-sm pl-4 animate-shake'>{lang[langKey].inputPasswordErrorMessage}</p>}
                    </div>
                    {errorMessage && <p className='text-red-500 text-sm pl-4 animate-shake'>{errorMessage}</p>}
                    <button onClick={handleSubmit} className='bg-red-600 bg-opacity-100 w-full p-2 rounded-lg hover:bg-red-500 contrast-125'>{isLogin ? lang[langKey].signIn : lang[langKey].signUp}</button>
                    <span>{lang[langKey].or}</span>
                    <button className='bg-gray-500 bg-opacity-30 w-full p-2 rounded-lg hover:bg-gray-700 hover:bg-opacity-40'>{isLogin ? lang[langKey].signInUsingCode : lang[langKey].signUpUsingCode}</button>
                    {isLogin && <button onClick={handlePasswordReset} className='hover:text-gray-400 hover:underline font-normal'>{lang[langKey].forgetPassword}</button>}
                </div>
                <div>
                    <span className='text-gray-400'>{isLogin ? lang[langKey].newToFlixGpt : lang[langKey].alreadyHaveAccount}</span>
                    <button className='hover:underline' onClick={toggle}>{isLogin ? lang[langKey].signUpNow : lang[langKey].login}</button>
                </div>
            </form>

            <img src={NETFLIX_BG_POSTER} alt='bg-photo' className='h-screen w-screen object-cover fixed -z-10' />
            <div className='fixed inset-0 bg-black opacity-50'></div>

            {isLoading && <LoadingPage />}
        </div>
    )
}

export default Login;