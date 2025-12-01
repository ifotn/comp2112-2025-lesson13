import { StyleSheet } from "react-native";

export default function Styles() {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        text: {
            color: "#0c1880ff",
            fontWeight: "bold"
        },
        button: {
            fontSize: 20,
            backgroundColor: "#0c1880ff",
            color: "#fff",
            padding: 10,
            margin: 10
        }
    });
}