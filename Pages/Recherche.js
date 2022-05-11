
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
                        <TouchableOpacity onPress={() => navigation.navigate('Détails du pokemon', {
                            pokemonDatas: pokemonCherche
                        })
                        }>
                            <View>
                                <Image style={styles.image} source={{uri: pokemonCherche.sprites.front_default}}/>
                            </View>
                            <View>
                                <Text style={styles.center}>{pokemonCherche.name}</Text>
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
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 22
        },
        image: {
            width:150,
            height:150,
            marginLeft:120
        },
        center:{
            textAlign:"center",
            textTransform:"capitalize"
        }
    });

