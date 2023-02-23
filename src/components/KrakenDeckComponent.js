import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import deckKraken from "../mocks/KrakenDeck";
import cardBack from "../images/ImagesDeck/cardBack.png"

const number = []
let cont = 0

export default function DeckKrakenComponent(props){

  const [nome, setNome] = useState("")
  const [card, setCard] = useState(cardBack)

  function onPress(){
    let gerarNumero = Math.floor(Math.random() * 56)
      let estado = false
      while(estado === false){
        if(cont < 55){
          if(number.includes(gerarNumero) == false){
            number.push(gerarNumero)
            setNome(deckKraken[gerarNumero].name)
            setCard(deckKraken[gerarNumero].image)
            estado = true
            cont += 1
          }else{
            gerarNumero = Math.floor(Math.random() * 56)
          }
        }else{
          cont = 0
          number.splice(0, number.length)
          gerarNumero = Math.floor(Math.random() * 56)
        }
      }
  }

  function onLongPress(){
    setNome("")
    setCard(cardBack)
    cont = 0
    number.splice(0, number.length)
  }

  return(
    <View style={{width: props.width, height: props.height/1.5, alignItems: "center", justifyContent:"center"}}>
      <View style={{alignItems: "center"}}>
        <Text style={{color: "#FFFFFF", fontSize: props.width/15}}>{nome}</Text>
        <TouchableOpacity style={{marginTop: props.height/30}} onPress={onPress} onLongPress={onLongPress}>
        <Image style={{width: props.width/1.5, height: props.height/2, resizeMode:"stretch", borderRadius: 20, borderColor: "#000000", borderWidth: 2}} source={card}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}