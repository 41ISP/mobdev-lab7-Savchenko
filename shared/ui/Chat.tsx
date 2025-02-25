import { StyleSheet, View } from "react-native";
import MessageBubble from "./MessageBubble";

const Chat = () => {
    return(
        <View style={ChatStyle.chatContainer}>
            <MessageBubble received={true}>Hi</MessageBubble>
            <MessageBubble>Wow, Hi</MessageBubble>
        </View>
    )
}
const ChatStyle = StyleSheet.create({
    chatContainer: {
        padding: 10,
    }
})

export default Chat;