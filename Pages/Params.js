import {Text, View, Switch, StyleSheet} from "react-native";
import {useState} from "react";

export default function Params(props){

    const [isEnabled, setIsEnabled] = useState(false);
    const [toggleCamera, setToggleCamera] = useState(false);
    const [toggleGalerie, setToggleGalerie] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitchCamera = () => setToggleCamera(previousState => !previousState);
    const toggleSwitchGalerie = () => setToggleGalerie(previousState => !previousState);


    return(
        <View style={styles.container}>
            <Text style={styles.titre}>Bienvenue sur la page Paramètres</Text>
            <Text style={styles.description}>Vous pouvez ici changer les différents paramètres de l'application notamment l'autorisation de rotation d'écran</Text>
            <Text style={styles.description2}>Ou encore l'accès aux fichiers du téléphone</Text>

            <View style={styles.container}>
                <Text>Activer l'orientation automatique de l'application ?</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "red" }}
                    thumbColor={isEnabled ? "white" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <View style={styles.container}>
                <Text>Autoriser l'application à accéder à la caméra ?</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "red" }}
                    thumbColor={toggleCamera ? "white" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchCamera}
                    value={toggleCamera}
                />
            </View>

            <View style={styles.container}>
                <Text>Autoriser l'application à accéder à la galerie d'images ?</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "red" }}
                    thumbColor={toggleGalerie ? "white" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchGalerie}
                    value={toggleGalerie}
                />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: "center",
    },
    titre: {
        fontSize:25,
        textAlign:"center",
        fontWeight:"bold",
        marginTop:20,
        marginBottom:20
    },
    description: {
        fontSize:12,
        textAlign:"center",
        fontStyle:"italic"
    },
    description2: {
        fontSize:12,
        textAlign:"center",
        fontStyle:"italic",
        marginBottom:30
    }
});