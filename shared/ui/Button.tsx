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
        flexGrow: 1,
        marginHorizontal: 5,
    },
})

export default Button;