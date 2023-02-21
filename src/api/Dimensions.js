import { Dimensions } from "react-native";

export function Width(){
    return(
        Dimensions.get("window").width
    )
}
export function Heigth(){
    return(
        Dimensions.get("window").height
    )
}