import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const TodoList = () => {
    const [todo, setTodo] = useState([])
    const [text, setText] = useState('')

    const addTodo = () => {
        if (text.trim()) {
            setTodo([...todo, { id: Date.now().toString(), text }])
            setText('')
            console.log(text);
        }
    }

    const removeTodo = (id) => {
        setTodo(todo.filter(todo => todo.id != id))
    }

    const renderTodo = ({ item }) => {

        return (
            <TouchableOpacity onPress={() => removeTodo(item.id)}>
                <Text>{item.text}</Text>
            </TouchableOpacity>
        )
    }

    // const handleSubmit = () => {

    // }

    return (
        <View>
            <Text>Todo List</Text>
            <TextInput placeholder='Add a new task' value={text} onChangeText={setText} returnKeyType='done' />
            <Button title='Add task' onPress={addTodo} />
            <FlatList data={todo} keyExtractor={(item) => item.id} renderItem={renderTodo}>

            </FlatList>

        </View>
    )
}

export default TodoList