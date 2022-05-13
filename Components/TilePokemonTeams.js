import { StyleSheet, View, Image, Text} from 'react-native';
import baseImage from "../assets/pokeball.png"
import getPokemons from "../Api/PokeApi";
import React, {useEffect, useState} from "react";
import {TouchableOpacity} from "react-native";

export default function TilePokemonTeams(props) {
    const {navigation, url, name, ...restProps} = props;

    const [pokemonDatas,setPokemonDatas] = useState([]);
    const [pokemonImage,setPokemonImage] = useState(null);

    useEffect(() => {
        if (pokemonDatas.length === 0){
            getPokemons(url).then(data => {
                setPokemonDatas(data)
                setPokemonImage(data.sprites.other["official-artwork"].front_default);
            })
        }
    }, [])

    const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Détails du pokemon', {
                pokemonDatas: pokemonDatas
                })
            }>
                <View style={styles.containerImage}>
                    {
                        pokemonImage ?
                            (<Image style={styles.image} source={{uri : pokemonImage}}/>) :
                            (<Image style={styles.image} source={baseImage}/>)
                    }
                </View>
                <View style={styles.containerInfo}>
                    <Text style={styles.text}>{Capitalize(name)}</Text>
                </View>

            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "space-between",
        width: "33%",
        height: 150,
        padding: 5,
        marginBottom: 10,
        borderRadius: 5
    },
    containerInfo: {
        display: "flex",
        justifyContent: "space-between",
    },
    text: {
        height: 20,
        textAlign: "center"
    },
    containerImage: {
        height: "80%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 10,
        shadowColor: 'red',

    },
    image: {
        width: 100,
        height: 100
    }
});

