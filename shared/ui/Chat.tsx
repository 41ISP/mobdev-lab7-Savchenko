import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import MessageBubble from "./MessageBubble";
import Input from "./Input";
import { useState } from "react";
import Button from "./Button";

const Chat = () => {
    const [message, setMessage] = useState("")
    return(
        <View style={ChatStyle.chatContainer}>
            <ScrollView style={ChatStyle.messageContainer}>
                <MessageBubble received={true}>Hi</MessageBubble>
                <MessageBubble>Wow, Hi</MessageBubble>
            </ScrollView>
            <View style={ChatStyle.inputContainer}>
                <Input value={message} setValue={setMessage} placeholderValue="Напишите свое сообщение"/>
                <TouchableOpacity style={ChatStyle.sendButton}><Image style={ChatStyle.sendIcon} source={require('../../assets/images/sent-icon.png')}/></TouchableOpacity>
            </View>
        </View>
    )
}
const ChatStyle = StyleSheet.create({
    chatContainer: {
        // padding: 10,
        height: '100%',
        // backgroundColor: "red"
    },
    messageContainer: {
        padding: 5,
        height: "100%"
    },
    inputContainer: {
        marginHorizontal: 16,
        // marginVertical: 10,
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 4,
        flexDirection: 'row',
        // verticalAlign: 'bottom'
    },
    sendButton: {
        marginLeft: 10,
        paddingHorizontal: 14,
        paddingVertical: 10,
        backgroundColor: '#007AFF',
        borderRadius: 10,
    },
    sendIcon: {
        width: 24,
        height: 24,
        tintColor: '#FFF',
    }
})

export default Chat;