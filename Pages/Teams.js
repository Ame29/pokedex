import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import { retrieveData } from "../utils/localStorage";
import TilePokemon from "../Components/TilePokemon";

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
                <Text>Bienvenue sur votre équipe</Text>
                <FlatList
                    data={team}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <TilePokemon name={item.name} url={"https://pokeapi.co/api/v2/pokemon/"+item.id } navigation={navigation}/>
                    )}
                    keyExtractor={(item) => item.name}
                    style={styles.list}
                    onEndReachedThreshold={0.5}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: "center",
    },
});