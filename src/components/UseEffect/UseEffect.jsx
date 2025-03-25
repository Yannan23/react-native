import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(null)

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
                const data = await response.json();
                setMeals(data.meals)
            } catch (e) {
                setErr(e.message)
            } finally {
                setLoading(false)
            }
        }

        fetchMeals()
    }, [])

    if (loading) {
        return <Text>Loading</Text>
    }

    if (err) {
        return <text>Error:{err}</text>
    }

    return (
        <View>
            <Text>UseEffect</Text>
            <FlatList data={meals} keyExtractor={(item) => item.idMeal} renderItem={({ item }) => {
                return (
                    <View>
                        <Image source={{ uri: item.strMealThumb }} width={50} height={50} />
                        <Text>{item.strMeal}</Text>
                    </View>
                )
            }} />

        </View>
    )
}

export default UseEffect