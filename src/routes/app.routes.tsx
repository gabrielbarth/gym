import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import { Exercise } from "@pages/Exercise";
import { History } from "@pages/History";
import { Home } from "@pages/Home";
import { Profile } from "@pages/Profile";

type AppRoutes = {
  home: undefined;
  profile: undefined;
  history: undefined;
  exercise: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="profile" component={Profile} />
      <Screen name="history" component={History} />
      <Screen name="exercise" component={Exercise} />
    </Navigator>
  );
}
