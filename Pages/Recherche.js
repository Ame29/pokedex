
import React, {useEffect, useState} from "react";
import {SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity, View, Image} from "react-native";
import getPokemons from "../Api/PokeApi";

export default function PokemonSearch(props) {
    const {navigation, ...restProps} = props;

const [text, setDataText] = useState(null);
const [pokemonCherche, setPokemonCherche] = useState({});

const chercherPokemon = () => {
    getPokemons("https://pokeapi.co/api/v2/pokemon/"+text.toLowerCase())
        .then((datas) =>
        {
            setPokemonCherche(datas);
        });
}

    return (
            <SafeAreaView>
                <Text style={styles.titre}>Bienvenue sur la page de recherche</Text>
                <TextInput
                    style={styles.input}
                    value={text}
                    placeholder="Rechercher un pokémon"
                    onChangeText={setDataText}
                    onSubmitEditing={chercherPokemon}
                />
                {(pokemonCherche === undefined) ?
                    <Text style={styles.center}>Pas de Pokémon trouvé ! </Text> :
                    (pokemonCherche.id) ?
                        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Détails du pokemon', {
                            pokemonDatas: pokemonCherche
                        })
                        }>
                            <View style={styles.containerImage}>
                                <Image style={styles.image} source={{uri: pokemonCherche.sprites.other["official-artwork"].front_default}}/>
                            </View>
                            <View style={styles.containerInfo}>
                                <Text style={styles.text}>{pokemonCherche.name}</Text>
                            </View>

                        </TouchableOpacity> :
                        <Text style={styles.center}>Pas de Pokémon recherché ! </Text>
                }
            </SafeAreaView>
        );
    };

    const styles = StyleSheet.create({
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        container: {
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
            height: 200,
            padding: 5,
            marginBottom: 10,
            borderRadius: 5,
            marginLeft:"auto",
            marginRight:"auto",
        },
        containerInfo: {
            display: "flex",
            justifyContent: "space-between",
        },
        text: {
            textAlign: "center",
            fontSize:40,
            textTransform:"capitalize",
            marginTop:10
        },
        containerImage: {
            height: "100%",
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
            width: 200,
            height: 200
        },
        center:{
            textAlign:"center",
            textTransform:"none",
            fontWeight:"bold",
            fontSize:25,
            marginTop:25
        },
        titre: {
            fontSize:25,
            textAlign:"center",
            fontWeight:"bold",
            marginTop:10,
            marginBottom:20
        },
    });

