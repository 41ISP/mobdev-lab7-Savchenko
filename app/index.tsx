import { View } from "react-native";
import { Text } from "react-native";
import Button from "@/shared/ui/Button";
import { useRouter } from "expo-router";


const HomeScreen = () => {
    const router = useRouter();
    return(
        <View>
            <Text>This is a ChatScreen</Text>
            
        </View>
    );

}

export default HomeScreen;