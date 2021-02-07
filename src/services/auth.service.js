const axios = require('axios').default;
const validator = require('validator')
const { BASE_URL } = require('../config')

const userEndPoint = BASE_URL + '/users/';

countriesPhoneNumberCodes = {
    CM: "+237",
}

formatPhoneOrEmail = phone_or_email => {
    if(validator.isEmail(phone_or_email)) return phone_or_email
    const data = axios.get('http://ip-api.com/json')
                        .then(response => response.data)
                        .catch(error => console.log(error))
    
    // console.log(countriesPhoneNumberCodes[data.countryCode] + phone_or_email)

    return countriesPhoneNumberCodes[data.countryCode] + phone_or_email

}


// const getUsers = async () => {
//     let data;
//     axios.get(userEndPoint+'list/')
//         .then(response => data = response.data)
//         .catch(error => console.log(error))
//     return data;
// }

const register = async userData => {
    let data;
    const postData =  {
        phone_or_email: formatPhoneOrEmail(userData.phone_or_email),
        password: userData.password
    }
    await axios.post(userEndPoint + "/register", postData).then(response => {
        data = response.data
    }).catch(error => console.log("error message",error.message))
    return data
}

const verifyCode = async data => {
    let userToken
    await axios.post(BASE_URL + "/codes/verify", {
        key: data.code
    }).then(response => userToken = response.data)
    .catch(error => console.log(error))
    return userToken
}

const login = async loginCredentials => {

    let data;

    await axios.post(userEndPoint + "/login", {
        phone_or_email: formatPhoneOrEmail(loginCredentials.phone_or_email),
        password: loginCredentials.password
    }).then(response => data = response.data)
    .catch(error => console.log(error))

    return data
}


exports.register = register
exports.login = login
exports.verifyCode = verifyCode
