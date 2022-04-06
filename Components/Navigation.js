// In App.js in a new project

import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../Pages/Home";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PokemonDetails from "../Pages/PokemonDetails";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Pokédex" component={Home} />
            <Stack.Screen name="Détails du pokemon" component={PokemonDetails} />
        </Stack.Navigator>
    );
}

const PokemonStack = MyTabs;

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={PokemonStack}
                    styles={styles.header}
                    options={{
                        headerShown:false
                    }}
                />
                <Tab.Screen
                    name="RecherchePokemon"
                    component={PokemonStack}
                    options={{
                        title: "Recherche",
                        headerTintColor: "white",
                        headerStyle: { backgroundColor: "red" },
                    }}
                />
                <Tab.Screen
                    name="Teams"
                    component={PokemonStack}
                    options={{
                        title: "Teams",
                        headerTintColor: "white",
                        headerStyle: { backgroundColor: "red" },
                    }}
                />
            </Tab.Navigator>

        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:"red",
        color:"white"
    }
});