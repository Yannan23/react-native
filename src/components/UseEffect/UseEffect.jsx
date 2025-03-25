import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [data, setData] = useState([]);
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
                const result = await response.json();
                setData(result?.meals);
            } catch (e) {
                setErr(e);
            } finally {
                setLoading(false)
            }
        }
        fetchData();

    }, [])

    if (loading) {
        return <Text>Loading...</Text>
    }

    if (err) {
        return <Text>Error:{err}</Text>
    }

    return (
        <View>
            <Text>UseEffect</Text>
            <FlatList data={data} keyExtractor={(item) => item.idMeal.toString()} renderItem={({ item }) => {
                return (
                    <View>
                        <Image source={{ uri: item.strMealThumb }} width={20} height={20} />
                        <Text>{item.strMeal}</Text>
                    </View>
                )
            }} />

        </View>
    )
}

export default UseEffect