import React, { useState } from "react";
import { Alert, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import Money from "../components/Money";
import ocean from "../images/ocean.jpg"

export default function WoheverShip(){

    const [money, setMoney] = useState(15)
    const [tentacool, setTentacool] = useState(0)
    const [nDay, setNDay] = useState(0)

    function derrota(){
        Alert.alert("", "Vocês Perderam!",[{text: "Ok"}])
        setTentacool(0)
        setMoney(15)
        setNDay(0)
    }
    function vitoria(){
        Alert.alert("", "Vocês Ficaram Ricos!",[{text: "Ok"}])
        setTentacool(0)
        setMoney(15)
        setNDay(0)
    }

    function fDay(){
        setMoney(money + (tentacool * 10))
        setTentacool(0)
        if(nDay == 2){
            Alert.alert("","Vocês derrotaram o Kraken?", [{text: "Sim", onPress: vitoria},{text: "Não", onPress: derrota}])
        }else{
            setNDay(nDay + 1)
        }
    }
    return(
        <ImageBackground source={ocean} style={{flex: 1, justifyContent: "space-around"}}>
            <Money money={money} setMoney={setMoney} tentacool={tentacool} setTentacool={setTentacool}/>
            <View style={{alignItems: "center"}}>
                <TouchableOpacity onPress={fDay} style={{marginTop: 30}}>
                    <Text style={{color: "#FFF", fontSize: 30}}>Finalizar Batalha</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}