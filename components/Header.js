import { Text, StyleSheet } from "react-native";
import { Pressable } from "react-native-web";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth/auth.reducer";

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Pressable onPress={handleLogout} style={styles.logoutButton}>
      <Text style={{ color: "white", fontWeight: 700 }}>Logout</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    backgroundColor: "tomato",
    width: 70,
    height: 25,
    marginRight: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13,
  },
});

export default Header;
