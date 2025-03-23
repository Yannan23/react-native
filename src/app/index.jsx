import { View } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import TodayWeather from '../components/TodayWeather'
import WeatherForecast from '../components/weatherForecast'
import TodoList from '../components/TodoList/TodoList'
import ColorPicker from '../components/ColorPicker'
import ToggleButton from '../components/ToggleButton'


const index = () => {
    return (
        <View>
            {/* <SearchBar /> */}
            {/* <TodayWeather /> */}
            {/* <WeatherForecast /> */}
            {/* <ToggleButton /> */}
            {/* <ColorPicker /> */}

            <TodoList />
        </View>
    )
}

export default index