import { View } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import TodayWeather from '../components/TodayWeather'
import WeatherForecast from '../components/weatherForecast'


const index = () => {
    return (
        <View>
            <SearchBar />
            <TodayWeather />
            <WeatherForecast />
        </View>
    )
}

export default index