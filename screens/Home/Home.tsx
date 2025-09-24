import { View,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "../../assets/styles/globalStyles";

const Home = () => {
    return (
        <SafeAreaView style={[style.flex,style.backgroundWhite]}>
            <View>
                <Text>Home Screen</Text>
            </View>
        </SafeAreaView>
    )
}   

export default Home;