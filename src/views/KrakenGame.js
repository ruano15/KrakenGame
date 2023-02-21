import React, { useState } from "react";
import { ImageBackground, View } from "react-native";
import { Width , Heigth } from "../api/Dimensions"
import KrakenAlterLife from "../components/KrakenAlterLife";
import DeckKrakenComponent from "../components/KrakenDeckComponent";
import ocean from "../images/ocean.jpg"


export default function KrakenGame(){

    const componentWidth = Math.floor(Width())
    const componentHeigth = Math.floor(Heigth())

    const [life, setLife] = useState(35)

    return(
        <ImageBackground source={ocean} style={{flex: 1}}>
            <View>
                <DeckKrakenComponent width={componentWidth} height={componentHeigth}/>
                <KrakenAlterLife life={life} setLife={setLife} width={componentWidth} height={componentHeigth} quantity={1} />
            </View>
        </ImageBackground>
    )
}