import { StyleSheet, Text, View, Image } from "react-native";
import { fetchUserData } from "../redux/profile/profile.actions";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Profile() {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.profile.userData);

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatarImage}
        source={{
          uri: userData.avatar_url,
        }}
      />
      <Text style={[styles.text, styles.title]}>{userData.login}</Text>
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
  avatarImage: {
    width: 250,
    height: 250,
    borderRadius: 200,
    borderColor: "gray",
    borderWidth: 20,
  },
  text: {
    textAlign: "center",
    margin: 15,
  },
  title: {
    fontWeight: "700",
    fontSize: 30,
  },
});
