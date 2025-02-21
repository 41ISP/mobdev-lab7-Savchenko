import { useUserStore } from "@/entities/user/store";
import Button from "@/shared/ui/Button";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "react-native"


const LoginScreen = () => {
    const [inputValue, setInputValue] = useState('')
    const {setUser} = useUserStore()
    const handleClick = () => {
        setUser({userID: inputValue})
        router.replace('/(tabs)')
    }
    return(
        <View>
           <TextInput placeholder="Enter your ID" value={inputValue} onChangeText={setInputValue}/>
           <Button onClick={handleClick}>Log in</Button>
        </View>
    );
}

const LoginStyles = StyleSheet.create({
    loginInput: {

    }
})

export default LoginScreen;

