export interface inputType {
    label : string,
    placeholder : string,
    onChangeText : (value : string) => void,
    keyboardType? : string,
    secureTypeEntry? : boolean,
}

