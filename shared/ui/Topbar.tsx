import { PropsWithChildren } from "react";
import Button from "./Button";
import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";



const Topbar = () => {
    const router = useRouter()
    
    return(
        <View style={topbarStyles.topbar}>
            <Button onClick={() => {router.push('/ChatScreen')}}>Чаты</Button>
            <Button onClick={() => {router.push('/ContactScreen')}}>Контакты</Button>
            <Button onClick={() => {router.push('/')}}>Чат</Button>
        </View>
    ); 
}

const topbarStyles = StyleSheet.create({
    topbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }, 
})

export default Topbar