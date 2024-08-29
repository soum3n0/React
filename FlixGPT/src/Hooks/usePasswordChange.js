import { useState } from "react";
import { auth } from "../utils/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const usePasswordChange = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const requestPasswordChange = () => {
        sendPasswordResetEmail(auth, auth.currentUser.email)
            .then(() => {
                // Password reset email sent!
                setSuccess(true);
                const t = setTimeout(()=>{
                    setSuccess(false);
                }, 5000);
                return () => clearTimeout(t);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(true);
                const t = setTimeout(()=>{
                    setError(false);
                }, 5000);
                return () => clearTimeout(t);
            });
    }
    return {requestPasswordChange, success, error};
}

export default usePasswordChange;