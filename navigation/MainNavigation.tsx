import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./Routes";
import HomeScreen from "../screens/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store, { persistor } from "../redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import SingleDonationItem from "../screens/DonationItem/SingleDonationItem";
import Login from "../screens/Login/Login";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={Routes.Login} screenOptions={{headerShown:false}}>
                    <Stack.Screen name={Routes.Login} component={Login} />
                    <Stack.Screen name={Routes.Home} component={HomeScreen} />
                    <Stack.Screen name={Routes.DonationItem} component={SingleDonationItem} />
                </Stack.Navigator>
            </NavigationContainer>
            </PersistGate>
        </Provider>
    )
}
export default MainNavigation;