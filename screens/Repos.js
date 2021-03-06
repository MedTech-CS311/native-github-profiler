import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRepos } from "../redux/repos/repos.actions";

import SingleRepository from "../components/SingleRepository";
import { ScrollView } from "react-native-web";

export default function Repos() {
  const dispatch = useDispatch();

  const reposList = useSelector((state) => state.repos.reposList);

  useEffect(() => {
    dispatch(fetchUserRepos());
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {reposList.map((repo, index) => (
          <SingleRepository key={index} repo={repo} />
        ))}
      </ScrollView>
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
