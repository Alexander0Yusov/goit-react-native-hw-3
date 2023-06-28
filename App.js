// import { StatusBar } from "expo-status-bar"; // <StatusBar style="auto" />
// import { Text } from "react-native";
import { useFonts } from "expo-font";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import PostsScreen from "./screens/PostsScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-100": require("./assets/fonts/Roboto-Thin.ttf"),
    "Roboto-300": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-400": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-500": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-700": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-900": require("./assets/fonts/Roboto-Black.ttf"),
  });

  if (!fontsLoaded) {
    return;
  }

  return <RegistrationScreen />;
  // return <LoginScreen />;
  // return <PostsScreen />;
}

// npx expo start
// Добрий день, іконки треба додавати з бібліотеки expo/vector-icons
