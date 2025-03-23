import { View, Text, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'

const ToggleButton = () => {
    const [isOn, setIsOn] = useState(true)

    return (
        <View>
            <Text>ToggleButton</Text>
            <Text>{isOn ? 'on' : 'off'}</Text>

            <Button title='Toggle' onPress={() => setIsOn(!isOn)} />
        </View>
    )
}

export default ToggleButton