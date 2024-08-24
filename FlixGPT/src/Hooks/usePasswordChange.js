import { auth } from "../utils/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const usePasswordChange = () => {
    const requestPasswordChange = () => {
        sendPasswordResetEmail(auth, auth.currentUser.email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
    return {requestPasswordChange};
}

export default usePasswordChange;