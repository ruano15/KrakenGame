import React from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import dinheiro from "../images/money.png"
import tentaculo from "../images/tentaculoCortado.png"
import plus from "../images/plus.png"
import minus from "../images/minus.png"

export default function Money(props){

    function addMoney(){
        props.setMoney( props.money + 1)
    }
    function redMoney(){
        props.setMoney( props.money - 1)
    }
    function tent(){
        props.setTentacool(props.tentacool + 1)
    }
    function longPress(){
        props.setTentacool(props.tentacool = 0)
    }

    return(
        <View style={{flexDirection: "row", marginTop: 10, justifyContent: "space-around"}}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <TouchableOpacity onPress={redMoney}>
                        <Image source={minus} style={{width: 40, height: 40}}/>
                    </TouchableOpacity>
                    <ImageBackground source={dinheiro} style={{width: 60, height: 60, alignItems: "center", justifyContent: "center", marginHorizontal: 20}}>
                        <Text adjustsFontSizeToFit style={{fontSize: 40, color: "#000"}}>{props.money}</Text>
                    </ImageBackground>
                    <TouchableOpacity onPress={addMoney}>
                        <Image source={plus} style={{width: 40, height: 40}}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={tent} onLongPress={longPress}>
                        <ImageBackground source={tentaculo} style={{width: 60, height: 60, alignItems: "center", justifyContent: "center"}}>
                            <Text adjustsFontSizeToFit style={{fontSize: 40, color: "#000"}}>{props.tentacool}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
    )
}