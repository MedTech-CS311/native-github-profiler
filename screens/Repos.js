import { StyleSheet, Text, View } from "react-native";

export default function Repos() {
  return (
    <View style={styles.container}>
      <Text>hello from repos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
