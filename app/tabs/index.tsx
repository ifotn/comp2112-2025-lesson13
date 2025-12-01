import { Link } from "expo-router";
import { Text, View } from "react-native";
import Styles from "../styles";

export default function Index() {
  // enable style import
  const styles = Styles();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      {/* <Link href="/about" style={styles.button}>Go to About Screen</Link> */}
    </View>
  );
}
