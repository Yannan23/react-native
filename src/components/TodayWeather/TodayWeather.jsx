import { View, Text, FlatList } from 'react-native'
import React from 'react'

const TodayWeather = () => {
    const weather = [
        {
            weather: 'sunny',
            temp: '17-29'
        },
        {
            weather: 'cloudy'
        }]
    return (
        <View>
            <FlatList data={weather} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => {
                return (
                    <View>
                        <Text>weather: {item.weather}</Text>
                        {/* <Text>cloud: {item.cloud}</Text> */}
                    </View>
                )
            }
            } />
        </View>
    )
}

export default TodayWeather