import { Text, View } from "react-native";
import Styles from "../styles";

export default function About() {
    // initialize stylesheet
    const styles = Styles();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>About this App</Text>
            {/* <Link href="/" style={styles.button}>Go to Home Screen</Link> */}
        </View>
    )
}