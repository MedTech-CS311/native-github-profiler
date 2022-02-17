import { StyleSheet, Text, View, Image } from "react-native";
import { fetchUserData } from "../redux/profile/profile.actions";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Ionicons from "react-native-vector-icons/Ionicons";

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
      <Text style={styles.bio}>{userData.bio}</Text>
      <View style={styles.itemContainer}>
        <Ionicons name="location-outline" style={styles.itemText} />
        <Text style={styles.itemText}>{userData.location}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Ionicons name="business-outline" style={styles.itemText} />
        <Text style={styles.itemText}>{userData.company}</Text>
      </View>
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
  bio: {
    width: "80%",
  },
  itemContainer: {
    flexDirection: "row",
    gap: 4,
    marginTop: 6,
  },
  itemText: {
    color: "gray",
    fontSize: 16,
  },
});
