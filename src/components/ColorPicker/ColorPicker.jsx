import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const ColorPicker = () => {
    const colors = ['blue', 'yellow', 'red', 'green']
    const [selectedColor, setSelectedColor] = useState('')

    return (
        <View style={{ backgroundColor: selectedColor }}>
            <Text>Color Picker</Text>
            {colors.map((color) => (
                <Pressable
                    key={color}
                    style={[styles.colorContainer, { backgroundColor: color }]}
                    onPress={() => setSelectedColor(color)}
                />
            ))}
        </View>

    )
}

const styles = StyleSheet.create({
    colorContainer: {
        borderRadius: 50,
        width: 100,
        height: 100
    }
})

export default ColorPicker