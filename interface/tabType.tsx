
export interface tabType{
    tabId : number,
    title : string,
    isInActive : boolean,
    onPress? : (tabId : number)=> {}
}