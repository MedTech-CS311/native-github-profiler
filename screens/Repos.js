import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRepos } from "../redux/repos/repos.actions";

export default function Repos() {
  const dispatch = useDispatch();

  const reposList = useSelector((state) => state.repos.reposList);

  useEffect(() => {
    dispatch(fetchUserRepos());
  }, []);

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
