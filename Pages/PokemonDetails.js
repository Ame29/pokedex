import {View, Text, Image, StyleSheet, FlatList, Button, Pressable} from "react-native";
import React, {useEffect, useState} from "react";
import {storeData, retrieveData, eraseData} from "../utils/localStorage";

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

    const [team, setTeam] = useState([]);

    typesPokemon.forEach((data) => {
        types.push(<Text style={{textAlign:"center"}} key={data.type.name}>{data.type.name}</Text>)
    })


    const ajouterEquipe = () => {
        let myTeam = [datas, ...team];
        setTeam(myTeam);
        storeData("equipe",JSON.stringify(myTeam))
    }

    useEffect(() => {
        retrieveData("equipe").then((res) => {
            if (res){
                let test = JSON.parse(res);
                setTeam(test);
            }
        })
    }, [])

    const supprimerEquipe = () => {
        let myTeam = team.filter((pokemon) => {
            return(pokemon.name != datas.name);
        });
        setTeam(myTeam);
        storeData("equipe",JSON.stringify(myTeam))
    }

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
            <View>
                {team.find((pokemon) => pokemon.name == datas.name) ==
                undefined ? (
                    team.length >= 6 ? (
                        <Text style={styles.warning}>
                            6 pokémons sont déjà présents dans mon équipe !
                        </Text>
                    ) : (
                            <Button
                                onPress={() => ajouterEquipe()} // tj passer par une fonction anonyme quand on trigger un event
                                title="Ajouter à mon équipe"
                                color="green"
                            />
                    )
                ) : (
                        <Button
                            onPress={() => supprimerEquipe()}
                            title="Supprimer de l'équipe"
                            color="red"
                        />
                )}
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