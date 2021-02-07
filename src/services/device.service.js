const { BASE_URL } = require('../config')
const axios = require('axios').default

const deviceEndPoint = BASE_URL + '/devices'

const getDevices = async token => {
    let devices;

    const headers = {
        'authorization': token
    }

    await axios.get(deviceEndPoint, {headers})
    .then(response => devices = response.data)
    .catch(error => console.log(error))
    
    return devices
}

const addDevice = async (device, token) => {
    let data;
    const headers = {
        'authorization': token
    }
    await axios.post(deviceEndPoint + '/add', device, {headers} )
    .then(response => data = response.data)
    .catch(error => console.log(error))
    return data
}

const getDeviceTypes = async () => {
    let deviceTypes;
    await axios.get(deviceEndPoint + '/type')
    .then(response => deviceTypes = response.data)
    .catch(error => console.log(error))

    return deviceTypes
}

exports.getDevices = getDevices
exports.getDeviceTypes = getDeviceTypes
exports.addDevice = addDevice