import { Text, StyleSheet } from "react-native";

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text>Loading ....</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Loading;
