import { Text, View } from "react-native";
import Styles from "./styles";
import { Link } from "expo-router";

export default function Index() {
  // enable style import
  const styles = Styles();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Link href="/about">Go to About Screen</Link>
    </View>
  );
}
