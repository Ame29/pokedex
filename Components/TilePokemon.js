import { StyleSheet, View, Image, Text} from 'react-native';
import baseImage from "../assets/pokeball.png"
import getPokemons from "../Api/PokeApi";
import React, {useEffect, useState} from "react";
import {TouchableOpacity} from "react-native";

export default function TilePokemon(props) {
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

    return (
            <TouchableOpacity onPress={() => navigation.navigate('Détails du pokemon', {
                pokemonDatas: pokemonDatas
                })
            }>
                <View>
                    {
                        pokemonImage ?
                            (<Image style={styles.image} source={{uri : pokemonImage}}/>) :
                            (<Image style={styles.image} source={baseImage}/>)
                    }
                </View>
                <View>
                    <Text>{name}</Text>
                </View>

            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    image: {
        width:100,
        height:100
    }
});

