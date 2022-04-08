import {View, Text, Image, StyleSheet, FlatList} from "react-native";
import React, {useEffect} from "react";
import getPokemons from "../Api/PokeApi";

export default function PokemonDetails(props){

    const {route, ...restProps} = props;
    const datas = route.params.pokemonDatas
    const spriteFront = datas.sprites.front_default;
    const spriteBack = datas.sprites.back_default;
    const shinyFront = datas.sprites.front_shiny;
    const shinyBack = datas.sprites.back_shiny;
    const namePokemon = datas.name;
    const typesPokemon = datas.types;
    const skillsPokemon = datas.abilities;
    const types = [];
    const skills = [];

    typesPokemon.forEach((data) => {
        types.push(<Text style={{textAlign:"center"}} key={data.type.name}>{data.type.name}</Text>)
    })

   skillsPokemon.forEach((data) => {
        skills.push(<Text style={{textAlign:"center"}} key={data.ability.name}>{data.ability.name}</Text>)
    })



    return(
        <View style={styles.container}>
            <Text style={styles.namePokemon}>{namePokemon}</Text>
            <View style={styles.flexDiv}>
                <Image style={styles.image} source={{uri : spriteFront}}/>
                <Image style={styles.image} source={{uri : spriteBack}}/>
            </View>
            <View style={styles.flexDiv2}>
                <Image style={styles.image} source={{uri : shinyFront}}/>
                <Image style={styles.image} source={{uri : shinyBack}}/>
            </View>
            <View style={styles.flexDiv}>
                <View>
                    <Text style={styles.titre}>Types </Text>
                    {types}
                </View>
                <View style={{marginLeft: 50}}>
                    <Text style={styles.titre}>Abilities</Text>
                    {skills}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width:150,
        height:150,
        marginLeft:30
    },
    flexDiv:{
        flex: 1,
        flexDirection: "row",
    },
    flexDiv2:{
        flex: 1,
        flexDirection: "row",
        marginTop:0
    },
    type:{
        textAlign:"center"
    },
    titre:{
        fontWeight:"bold",
        fontSize:25,
        textAlign:"center",
        marginBottom:20
    },
    namePokemon:{
        textAlign:"center",
        marginTop:20,
        textTransform:"uppercase",
        fontWeight:"bold",
        fontSize:25
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});