import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Money from "../components/Money";

export default function WoheverShip(){

    const [money, setMoney] = useState(15)
    const [tentacool, setTentacool] = useState(0)

    function fDay(){
        setMoney(money + (tentacool * 10))
        setTentacool(0)
    }
    return(
        <View style={{backgroundColor: "#000000", flex: 1}}>
            <Money money={money} setMoney={setMoney} tentacool={tentacool} setTentacool={setTentacool}/>
            <View style={{alignItems: "center"}}>
                <TouchableOpacity onPress={fDay} style={{marginTop: 30}}>
                    <Text style={{color: "#FFF", fontSize: 30}}>Finalizar Batalha</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}