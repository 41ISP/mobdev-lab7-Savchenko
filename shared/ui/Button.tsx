import { PropsWithChildren } from "react";
import { Text, TouchableOpacity } from "react-native";
interface IButtonProps extends PropsWithChildren {
    onClick: () => void
}
const Button = ({ children, onClick}: IButtonProps) => {
    return(
        <TouchableOpacity onPress={onClick}><Text>{children}</Text></TouchableOpacity>
    );
}

export default Button;