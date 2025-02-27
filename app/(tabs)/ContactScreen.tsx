import { useUserStore } from "@/entities/user/store";
import { useRouter } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native"

const ContactScreen = () => {
    const {setUser} = useUserStore()
    const router = useRouter()
    const handlePress = () => {
        setUser({userID: ""})
        router.push('/login')
    }
    return(
        <View>
            <Text>This is a ContactScreen</Text>
            <TouchableOpacity onPress={handlePress}>Log out</TouchableOpacity>
        </View>
    );
}

export default ContactScreen;
