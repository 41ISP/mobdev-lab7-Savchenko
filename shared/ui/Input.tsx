import { PropsWithChildren } from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native'

interface IInputProps {
    value: string
    setValue: ((e: string) => void)
    placeholderValue: string
}

const Input = ({ value, setValue, placeholderValue}: IInputProps) => {
    const handleChange = (e: string) => {
        setValue(e)
    }
    
    return(
        <TextInput value={value} onChangeText={handleChange} placeholder={placeholderValue}/>
    )
}

export default Input;