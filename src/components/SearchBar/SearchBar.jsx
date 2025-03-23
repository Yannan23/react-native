import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const SearchBar = () => {
    const [city, setCity] = useState('')
    return (
        <View>
            <Text>SearchBar</Text>
            <TextInput placeholder='Enter City' onChange={() => setCity(city)} />
        </View>
    )
}

export default SearchBar