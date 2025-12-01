import { Stack } from "expo-router";
import { Text, View } from "react-native";
import Styles from "./styles";

// native equivalent of 404 page but we don't have 404 since not using http 
export default function NotFound() {
    const styles = Styles();
    return (
        <>
            <Stack.Screen options={{ title: 'Sorry, not found' }} />
            <View style={styles.container}>
                <Text style={styles.text}>Ooops!  We couldn&apos;t find that screen</Text>
                {/* <Link href="/tabs" style={styles.button}>
                    Return to Home Screen
                </Link> */}
            </View>
        </>
    )
}
