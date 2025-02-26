import { PropsWithChildren } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
interface IButtonProps extends PropsWithChildren {
    onClick: () => void
}
const Button = ({ children, onClick}: IButtonProps) => {
    return(
        <TouchableOpacity style={ButtonStyles.btn} onPress={onClick}><Text>{children}</Text></TouchableOpacity>
    );
}

const ButtonStyles = StyleSheet.create({
    btn: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: '#FFF',
        borderRadius: 8,
    },
})


export default Button;