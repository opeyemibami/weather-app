const { response } = require('express')
const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8f3b3dd2981625a407b1b44e0dee18a3&query='+longitude+','+latitude+'&units=f'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            const current = response.body.current
            callback(undefined, 'The weather description is '+current.weather_descriptions+' with roughtly '+current.temperature + ' degrees farenheit out-there.' +'There is '+current.precip+ '% chance of rain')
        }
    })
}

module.exports = forecast