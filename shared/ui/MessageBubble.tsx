import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native"

interface IMessageBubleProps extends PropsWithChildren {
    received?: boolean
}


const MessageBubble = ({received, children}: IMessageBubleProps) => {
    return (
        <View
            style={received ? {...MessageStyle.messageContainer, ...MessageStyle.received} : {...MessageStyle.messageContainer, ...MessageStyle.sent}}>
            <Text>{children}</Text>
            <Text style={{alignSelf: 'flex-end'}}>12:00</Text>
        </View>
    )
}

const MessageStyle = StyleSheet.create({
    messageContainer: {
        maxWidth: "75%",
        padding: 10,
        borderWidth: 2,
        borderRadius: 5,
        marginVertical: 4,
    },
    received: {
        backgroundColor: "#E5E5EA",
        alignSelf: "flex-start",
    },
    sent: {
        backgroundColor: "#007AFF",
        alignSelf: "flex-end"
    }

})

export default MessageBubble; 