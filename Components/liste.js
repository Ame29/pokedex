import React, {useEffect, useState} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {getPokemons} from "../Api/PokeApi";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default function Liste(props) {
    const {liste,...restProps} = props;
    const [nextPage, setNextPage] = useState("https://pokeapi.co/api/v2/pokemon");

    useEffect(() => {
        loadPokemon(nextPage);
    });

    const loadPokemon = (url) => {
        getPokemons(url).then(datas => {
            setListPokemon
        })
    }

    useEffect(() => {
        getPokemons().then(datas => {
            setListPokemon(datas)
        });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={liste.results}
                numColumns={3}
                renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
                keyExtractor={item => item.name}
                onEndReached={()=> {
                    newData = getPokemons(liste.next);
                    liste.push(newData);
                }}
            />
        </View>
    );
}