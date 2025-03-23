import { View } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import TodayWeather from '../components/TodayWeather'
import WeatherForecast from '../components/weatherForecast'
import ToggleButton from '../components/ToggleButton/ToggleButton'
import ColorPicker from '../components/ColorPicker/ColorPicker'


const index = () => {
    return (
        <View>
            {/* <SearchBar /> */}
            {/* <TodayWeather /> */}
            {/* <WeatherForecast /> */}
            <ColorPicker />
        </View>
    )
}

export default index