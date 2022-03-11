// React Native
import { StyleSheet, Text, View } from "react-native";

// Screens
import Profile from "./screens/Profile";
import Repos from "./screens/Repos";
import Signup from "./screens/Signup";
import Login from "./screens/Login";

// Components
import Header from "./components/Header";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Ionicons from "react-native-vector-icons/Ionicons";

// Redux
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Navigator() {
  // TODO: Uncomment line 29 and comment line 28 to activate authentication
  //   const isLoggedIn = true;
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Profile") {
                iconName = focused ? "person-circle" : "person-circle-outline";
              } else if (route.name === "Repos") {
                iconName = focused ? "list-circle" : "list-circle-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{ headerRight: (props) => <Header {...props} /> }}
          />
          <Tab.Screen
            name="Repos"
            component={Repos}
            options={{ tabBarBadge: 0 }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      )}
      <ToastContainer position="top-center" />
    </NavigationContainer>
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
