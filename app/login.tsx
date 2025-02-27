import { useUserStore } from "@/entities/user/store";
import { MessengerAPI } from "@/shared/api/api";
import Button from "@/shared/ui/Button";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "react-native"


const LoginScreen = () => {
    const [inputValue, setInputValue] = useState('')
    const {setUser} = useUserStore()
    const handleClick = () => {
        MessengerAPI.regUser(inputValue)
        setUser({userID: inputValue})
        router.replace('/(tabs)')
    }
    return(
        <View style={LoginStyles.loginContainer}>
           <TextInput style={LoginStyles.loginInput} placeholder="Enter your ID" value={inputValue} onChangeText={setInputValue}/>
           <Button onClick={handleClick}>Log in</Button>
        </View>
    );
}

const LoginStyles = StyleSheet.create({
    loginInput: {
        width: '100%',
        height: 48,
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#007AFF',
        paddingHorizontal: 14,
        fontSize: 16,
        color: '#333',
        marginBottom: 12,
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 20,
    }
})

export default LoginScreen;

