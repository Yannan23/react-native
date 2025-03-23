import { View, Text, FlatList, TextInput, Button } from 'react-native'
import React, { useState } from 'react'



const TodayWeather = () => {
    const [weather, setWeather] = useState('')
    const [city, setCity] = useState('')

    const weatherData = {
        Sydney: 'Sunny, 19-27',
        Beijing: 'cloudy,-1 - 10'
    }

    const getWeather = () => {
        co
        setWeather(weatherData[city] || 'no data')
    }

    return (
        <View>
            <Text>Weather</Text>
            <TextInput placeholder='Enter city' value={city} onChangeText={setCity} />
            <Button title='Get Weather' onPress={getWeather} />

            {weather ? <Text>{weather}</Text> : null}
        </View>
    )
}

export default TodayWeather