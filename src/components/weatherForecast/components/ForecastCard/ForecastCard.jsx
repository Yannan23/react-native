import { View, Text } from 'react-native'
import React from 'react'

const ForecastCard = ({ day, weather }) => {

    return (

        <View>
            <Text>ForecastCard</Text>
            <Text>day:{day}</Text>
            <Text>weather:{weather}</Text>
        </View>
    )
}

export default ForecastCard