import { View } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import TodayWeather from '../components/TodayWeather'
import WeatherForecast from '../components/weatherForecast'
import ToggleButton from '../components/ToggleButton/ToggleButton'


const index = () => {
    return (
        <View>
            {/* <SearchBar /> */}
            <TodayWeather />
            {/* <WeatherForecast /> */}
        </View>
    )
}

export default index