import { StyleSheet, Text, View, FlatList } from 'react-native';
import {useEffect, useState} from "react";
import getPokemons from "../Api/PokeApi";
import TilePokemon from "../Components/TilePokemon";
import PokemonDetails from "./PokemonDetails";

export default function Home(props) {

    const {navigation, ...restProps} = props;

    const [nextPage, setNextPage] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [listPokemon, setListPokemon] = useState([])

    useEffect(() => {
        loadPokemon(nextPage)
    }, []);

    const loadPokemon = (url) => {
        getPokemons(url).then(datas => {
            setListPokemon([...listPokemon, ...datas.results]);
            setNextPage(datas.next);
        })
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={listPokemon}
                numColumns={3}
                renderItem={({item}) => <View>
                    <TilePokemon url={item.url} name={item.name} navigation={navigation}/>
                </View>
                }
                keyExtractor={item => item.name}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    loadPokemon(nextPage)
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 22
    }
});


