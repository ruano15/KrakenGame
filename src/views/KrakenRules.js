import React from "react";
import { Image, ImageBackground, SafeAreaView, ScrollView, Text, View } from "react-native";
import kraken from "../images/kraken.png"
import { Width , Heigth } from "../api/Dimensions"
import tabuleiroUm from "../images/tabuleiroUm.png"
import tabuleiroDois from "../images/tabuleiroDois.png"
import um from "../images/um.png"
import dois from "../images/dois.png"
import tres from "../images/tres.png"
import ocean from "../images/ocean.jpg"



export default function KrakenRules(){

    const componentWidth = Math.floor(Width())
    const componentHeigth = Math.floor(Heigth())

    const B = (props) => <Text style={{fontWeight: "bold"}}>{props.children}</Text>

    return(
        <ImageBackground source={ocean} style={{flex: 1}}>
            <SafeAreaView>
                <ScrollView>
                    <View style={{alignItems: "center"}}>
                        <Text adjustsFontSizeToFit style={{color: "#FFFFFF", fontSize: componentWidth/10, fontWeight: "bold"}}>
                            The Kraken Game
                        </Text>
                        <Image source={kraken} style={{width: componentWidth/2, height: componentHeigth/3}}/>
                    </View>
                    <View style={{alignItems: "center", justifyContent: "center"}}>
                        <Text adjustsFontSizeToFit style={{color: "#FFFFFF", fontSize: componentWidth/20, textAlign: "center", marginBottom: 20}}>
                        Todos os anos, ao menos uma vez, dizem que o Kraken desperta das
                        profundezas do oceano para se alimentar, normalmente de baleias
                        e algumas dúzias de navios. O monstro, que normalmente fica o 
                        tempo todo abaixo das areias do oceano, surge na superfície por 
                        três dias onde vários mercenários, piratas e até marinheiros vão 
                        ao seu encontro com a intenção de enfrentá-lo na chance de obter 
                        os valiosos olhos do Kraken (ou ao menos um de seus tentáculos) 
                        e acumular as riquezas inimagináveis que estes itens valem, ou 
                        apenas pela fama e a maravilhosa reputação de ser o maior herói 
                        dos mares, derrotando o maior de seus monstros… Isso, claro, se 
                        sobreviverem.
                        </Text>
                        <Text adjustsFontSizeToFit style={{color: "#FFFFFF", fontSize: componentWidth/15, textAlign: "center", fontWeight: "bold", marginBottom: 10}}>
                            Objetivo do jogo:
                        </Text>
                        <Text adjustsFontSizeToFit style={{color: "#FFFFFF", fontSize: componentWidth/20, textAlign: "center", marginBottom: 20}}>
                        Em Kraken, os jogadores são mercenários e heróis buscando riqueza 
                        e fama. O objetivo do jogo é conseguir matar o Kraken nos três 
                        dias em que ele aparece na superfície para conseguir os valiosos 
                        olhos de Kraken e ficar muito rico e famoso!
                        Existe também um outro objetivo oculto, que tal você descobrir?
                        </Text>
                        <Text adjustsFontSizeToFit style={{color: "#FFFFFF", fontSize: componentWidth/15, textAlign: "center", fontWeight: "bold", marginBottom: 10}}>
                        Preparação:
                        </Text>
                        <View style={{width: componentWidth}}>
                            <Text adjustsFontSizeToFit style={{color: "#FFFFFF", fontSize: componentWidth/17, textAlign: "left", fontWeight: "bold", marginBottom: 10}}>
                            1° Preparar tabuleiro
                            </Text>
                        </View>
                        <Text adjustsFontSizeToFit style={{color: "#FFFFFF", fontSize: componentWidth/20, textAlign: "center", marginBottom: 20}}>
                        O tabuleiro de Kraken é separado por áreas e posições, da seguinte forma:
                        </Text>
                        <Image source={tabuleiroUm} style={{width: componentWidth/1.1, height: componentHeigth/4, marginBottom: 20, resizeMode: "stretch"}}/>
                        <Text adjustsFontSizeToFit style={{color: "#FFFFFF", fontSize: componentWidth/20, textAlign: "center", marginBottom: 20}}>
                        Tudo que acontece no jogo vai estar sempre referenciado em uma posição dentro de uma área.
                        </Text>
                        <Text adjustsFontSizeToFit style={{color: "#FFFFFF", fontSize: componentWidth/20, textAlign: "center", marginBottom: 20}}>
                        O tabuleiro do jogo deve ser montado da seguinte forma:
                        </Text>
                        <Image source={tabuleiroDois} style={{width: componentWidth/1.1, height: componentHeigth/3, marginBottom: 20, resizeMode: "stretch"}}/>
                        <Text adjustsFontSizeToFit style={{color: "#FFFFFF", fontSize: componentWidth/20, textAlign: "center", marginBottom: 20}}>
                        <B>01 – Local do jogador:</B> Cada um dos jogadores dispõe suas cartas da seguinte forma:
                        </Text>
                        <View style={{width: componentWidth}}>
                            <View style={{flexDirection: "row"}}>
                                <Image source={um} style={{marginRight: 20}}/>
                                <Text adjustsFontSizeToFit style={{color: "#FFFFFF", fontSize: componentWidth/20, textAlign: "center", marginBottom: 20}}>- Carta de personagem</Text>
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <Image source={dois} style={{marginRight: 20}}/>
                                <Text adjustsFontSizeToFit style={{color: "#FFFFFF", fontSize: componentWidth/20, textAlign: "center", marginBottom: 20}}>- Armas</Text>
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <Image source={tres} style={{marginRight: 20}}/>
                                <Text adjustsFontSizeToFit style={{color: "#FFFFFF", fontSize: componentWidth/20, textAlign: "center", marginBottom: 20}}>- Itens</Text>
                            </View>
                        </View>
                        <Text adjustsFontSizeToFit style={{color: "#FFFFFF", fontSize: componentWidth/20, textAlign: "center", marginBottom: 20}}>
                        <B>02 – Área de movimento do navio:</B>O navio inicia na área de longa distância (área 5), mas pode ser movimentado para a área de curta distância (área 4), ou retornar para a cidade.
                        </Text>
                        <Text adjustsFontSizeToFit style={{color: "#FFFFFF", fontSize: componentWidth/20, textAlign: "center", marginBottom: 20}}>
                        <B>03 – Inventario do navio:</B>  Nesta área ficam as cartas de itens do navio.
                        </Text>
                        <Text adjustsFontSizeToFit style={{color: "#FFFFFF", fontSize: componentWidth/20, textAlign: "center", marginBottom: 20}}>
                        <B>04 - Kraken:</B> Na área 2 a ficha do Kraken deve ser posicionada.
                        </Text>
                        <Text adjustsFontSizeToFit style={{color: "#FFFFFF", fontSize: componentWidth/20, textAlign: "center", marginBottom: 20}}>
                        <B>05 - Deck do Kraken:</B> Na área 2 acima da ficha do Kraken, embaralhe e posicione o deck de ações do kraken, ao lado dele ficará também a pilha de descarte do deck.
                        </Text>
                        </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    )
}