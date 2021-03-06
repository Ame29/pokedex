import * as React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../Pages/Home";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PokemonDetails from "../Pages/PokemonDetails";
import PokemonSearch from "../Pages/Recherche";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Team from "../Pages/Teams";
import Params from "../Pages/Params";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Pokédex" component={Home} />
            <Stack.Screen name="Détails du pokemon" component={PokemonDetails} />
            <Stack.Screen name="Recherche" component={PokemonSearch} />
            <Stack.Screen name="Mon équipe" component={Team} />
            <Stack.Screen name="Paramètres de l'application" component={Params} />
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
                        headerShown:false,
                        tabBarIcon: ({tintColor}) => (
                            <Icon name="pokeball" size={25}/>
                        )
                    }}
                />
                <Tab.Screen
                    name="Rechercher un pokémon"
                    component={PokemonSearch}
                    options={{
                        headerShown: true,
                        tabBarIcon: ({tintColor}) => (
                            <Icon name="search-web" size={25}/>
                        )
                    }}
                />
                <Tab.Screen
                    name="Mon équipe"
                    component={Team}
                    options={{
                        tabBarIcon: ({tintColor}) => (
                            <Icon name="account-multiple" size={25}/>
                        )
                    }}
                />
                <Tab.Screen
                    name="Paramètres"
                    component={Params}
                    options={{
                        tabBarIcon: ({tintColor}) => (
                            <Icon name="settings-helper" size={25}/>
                        )
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