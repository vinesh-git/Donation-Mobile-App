import { Dimensions } from "react-native";
import DeviceInfo from "react-native-device-info";

const {width,height} = Dimensions.get('window');

const isSmall = width <= 375 && !DeviceInfo.hasNotch();

const guidelineBaseWidth = isSmall ? 330 : 350;

const guidlineBaseHeight = () =>{
    if(isSmall){
        return 550;
    }else if(width >= 414){
        return 620;
    }
    return 680;
}

const horizontalScale = (size:number) => (width/guidelineBaseWidth) * size;

const verticalScale = (size:number) => (height/guidlineBaseHeight()) * size;

const guidlineBaseFont = width > 410 ? 430 : 410;

const fontScale = (size:number) => Math.round((width/guidlineBaseFont) * size);

export {horizontalScale,verticalScale,fontScale};