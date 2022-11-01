import { useEffect } from "react";
import { LogBox } from "react-native";
import "react-native-gesture-handler";
import AppNavigations from "./src/AppNavigations";
import ThemeManager from "./src/components/organisms/ThemeManager";
import { authenticateUserAnonymously } from "./src/services/firebase";

export default function App() {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        await authenticateUserAnonymously();
      } catch (error) {}
    })();
  }, []);

  return (
    <ThemeManager>
      <AppNavigations />
    </ThemeManager>
  );
}
