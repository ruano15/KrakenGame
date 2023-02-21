import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { Width, Heigth } from "../api/Dimensions";
import kraken from "../images/kraken.png"
import ocean from "../images/ocean.jpg"

export default function InitialPage(){

    const componentWidth = Math.floor(Width())
    const componentHeigth = Math.floor(Heigth())

    const navigation = useNavigation()

    function handleGame(){
        navigation.navigate("KrakenGame")
    }
    function handleRules(){
        navigation.navigate("KrakenRules")
    }

    return(
        <ImageBackground source={ocean} style={{flex: 1}}>
            <View style={{alignItems: "center"}}>
                <Text adjustsFontSizeToFit style={{color: "#FFFFFF", fontSize: componentWidth/10, fontWeight: "bold", marginTop: 20}}>
                    The Kraken Game
                </Text>
                <Image source={kraken} style={{width: componentWidth/2, height: componentHeigth/3}}/>
                <View style={{flexDirection: "row", justifyContent: "space-around"}}>
                    <TouchableOpacity onPress={handleGame} style={{width: componentWidth/2.5, height: componentHeigth/10, backgroundColor: "#909497", borderRadius: 10, alignItems: "center", justifyContent: "center", marginHorizontal: 10, marginTop: 20}}>
                        <Text style={{color: "#FFFFFF", fontSize: componentWidth/10, fontWeight: "bold"}}>Jogo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleRules} style={{width: componentWidth/2.5, height: componentHeigth/10, backgroundColor: "#909497", borderRadius: 10, alignItems: "center", justifyContent: "center", marginHorizontal: 10, marginTop: 20}}>
                        <Text style={{color: "#FFFFFF", fontSize: componentWidth/10, fontWeight: "bold"}}>Regras</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}