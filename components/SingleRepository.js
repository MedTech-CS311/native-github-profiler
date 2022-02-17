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
    </View>
  );
};

const styles = StyleSheet.create({
  repoContainer: {
    border: "1px solid gray",
    width: "95%",
    height: 50,
    padding: 5,
    marginTop: 5,
  },
  repoTitle: {
    fontWeight: 500,
    color: "#03578A",
    fontSize: 16,
  },
});

export default SingleRepository;
