import React, { useEffect, useState } from "react";
import {StyleSheet, FlatList, View, Text, Button} from "react-native";
import { retrieveData } from "../utils/localStorage";
import TilePokemonTeams from "../Components/TilePokemonTeams";

export default function Team(props) {
    const { route, navigation, ...restProps } = props;

    const [team, setTeam] = useState([]);

    useEffect(() => {

        retrieveData("equipe").then((res) => {
            if (res) {
                let datas = JSON.parse(res);
                setTeam(datas);
            }
        });

    }, []);


    return (
        <>
            <View style={styles.container}>
                <Text style={styles.titre}>Bienvenue sur votre équipe</Text>
                <FlatList
                    data={team}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <TilePokemonTeams name={item.name} url={"https://pokeapi.co/api/v2/pokemon/"+item.id } navigation={navigation}/>
                    )}
                    keyExtractor={(item) => item.name}
                    style={styles.list}
                    onEndReachedThreshold={0.5}
                />
                <Button
                    onPress={() => retrieveData("equipe").then((res) => {
                        if (res) {
                            let datas = JSON.parse(res);
                            setTeam(datas);
                        }
                    })} // tj passer par une fonction anonyme quand on trigger un event
                    title="Actualiser"
                    color="lightblue"
                    style={styles.button}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 22,
        width:"100%"
    },
    button:{
        marginTop: 25
    },
    titre: {
        fontSize:25,
        textAlign:"center",
        fontWeight:"bold",
        marginTop:0,
        marginBottom:20
    },
});