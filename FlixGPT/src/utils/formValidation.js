export const validateEmail = (email) => {
    const isValid = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email);
    return isValid;
}

export const validatePassword = (password)=>{
    const isValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d|(?=.*\W+)).{8,}$/.test(password);
    return isValid;
}