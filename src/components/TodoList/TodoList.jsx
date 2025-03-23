import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const TodoList = () => {

    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')

    const addTodo = () => {
        if (text.trim()) {
            setTodos([...todos, { id: Date.now().toString(), text }])
            setText('')
        }
    }

    const removeTodo = (id) => {
        setTodos(todos.filter((todos) => todos.id != id))
    }

    const renderTodo = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => removeTodo(item.id)}>
                <Text>{item.text}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <Text>Todo List</Text>
            <TextInput placeholder='Add a new task' value={text} onChangeText={setText} returnKeyType='done' />
            <Button title='Add todo' onPress={addTodo} />
            <FlatList data={todos} keyExtractor={item => item.id} renderItem={renderTodo} />
        </View>
    )
}

export default TodoList