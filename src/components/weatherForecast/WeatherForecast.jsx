import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ForecastCard from './components/ForecastCard'

const WeatherForecast = () => {
    const dayData = [
        {
            day: 'monday',
            weather: 'sunny'
        },
        {
            day: 'Tuesday',
            weather: 'cloudy'
        }
    ]
    return (
        <View>
            <Text>WeatherForecast</Text>
            <FlatList
                data={dayData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <ForecastCard day={item.day} weather={item.weather} />
                )}
            />
        </View>
    )
}

export default WeatherForecast