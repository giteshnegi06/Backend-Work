exports.validname = (name)=>{
    const validname = /^[a-zA-Z ]+$/
    return validname.test(name)
}
exports.validemail = (email)=>{
    const validemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return valideamil.test(email)
}
exports.validpassword = (password)=>{
    const validpassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return validpassword.test(password)
}