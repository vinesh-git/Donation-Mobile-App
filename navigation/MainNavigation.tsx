import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./Routes";
import HomeScreen from "../screens/Home/Home";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name={Routes.Home} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainNavigation;