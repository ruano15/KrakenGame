import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import plus from "../images/plus.png"
import minus from "../images/minus.png"

export default function KrakenAlterLife(props){

  const width = props.width
  const heigth = props.height

  function add(){
    props.setLife(props.life + props.quantity)
  }

  function red(){
    props.setLife(props.life - props.quantity)
  }

  return(
        <View style={{width: width, height: heigth/3.4, alignItems: "center", justifyContent: "space-around", flexDirection: "row"}}>
          <TouchableOpacity onPress={add}>
            <Image style={{width: width/10, height: width/10}} source={plus}/>
          </TouchableOpacity>
            <Text adjustsFontSizeToFit style={{fontSize: width/3, color: "#FFFFFF"}}>{props.life}</Text>
            <TouchableOpacity onPress={red}>
            <Image style={{width: width/10, height: width/10}} source={minus}/>
          </TouchableOpacity>
        </View>
  )
}
