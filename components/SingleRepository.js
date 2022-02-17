import { Text, View, StyleSheet, Linking } from "react-native";

const SingleRepository = ({ repo }) => {
  const navigateToRepo = () => {
    Linking.openURL(repo.html_url);
  };

  return (
    <View style={styles.repoContainer}>
      <Text style={styles.repoTitle} onPress={navigateToRepo}>
        {repo.name}
      </Text>
      <Text
        style={{
          color: repo.visibility === "public" ? "peru" : "silver",
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: repo.visibility === "public" ? "peru" : "silver",
          borderRadius: 13,
          height: 25,
          paddingTop: 1,
          paddingBottom: 1,
          paddingLeft: 5,
          paddingRight: 5,
          fontWeight: 700,
        }}
      >
        {repo.visibility}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  repoContainer: {
    border: "2px solid silver",
    width: "95%",
    height: 50,
    padding: 5,
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 18,
    paddingRight: 18,
    filter: "drop-shadow(0.1rem 0.1rem 0.1rem silver)",
    borderRadius: 23,
    backgroundColor: "white",
  },
  repoTitle: {
    fontWeight: 500,
    color: "#03578A",
    fontSize: 16,
  },
});

export default SingleRepository;
