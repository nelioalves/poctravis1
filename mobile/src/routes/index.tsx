import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import { Home, Catalog, ProductDetails } from "../pages";
import { NavBar } from "../components";
import { nav, colors } from "../styles";

const Stack = createStackNavigator();

const HeaderText: React.FC = () => <Text style={nav.leftText}>DS Catalog</Text>;

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: " ",
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
        headerLeft: () => <HeaderText />,
        headerRight: () => <NavBar />,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Catalog" component={Catalog} />
      <Stack.Screen name="Product Details" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default Routes;
