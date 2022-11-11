import { Exercise } from "@pages/Exercise";
import { History } from "@pages/History";
import { Home } from "@pages/Home";
import { Profile } from "@pages/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Home} />
      <Screen name="profile" component={Profile} />
      <Screen name="history" component={History} />
      <Screen name="exercise" component={Exercise} />
    </Navigator>
  );
}
