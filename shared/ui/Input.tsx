import { PropsWithChildren } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

interface IInputProps {
    value: string
    setValue: ((e: string) => void)
    placeholderValue: string
}

const Input = ({ value, setValue, placeholderValue }: IInputProps) => {
    const handleChange = (e: string) => {
        setValue(e)
    }

    return (
        <TextInput style={InputStyles.input} value={value} onChangeText={handleChange} placeholder={placeholderValue} />
    )
}


const InputStyles = StyleSheet.create({
    input: {
        flexGrow: 1,
         height: 40,
        paddingHorizontal: 12,
        fontSize: 16,
        color: '#333',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#007AFF',
    }
})
export default Input;