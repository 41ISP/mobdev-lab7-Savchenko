import { View } from "react-native";
import { Text } from "react-native";
import Button from "@/shared/ui/Button";
import { useRouter } from "expo-router";
import Chat from "@/shared/ui/Chat";


const HomeScreen = () => {
    const router = useRouter();
    return(
        <View>
            <Chat/>
        </View>
    );

}

export default HomeScreen;