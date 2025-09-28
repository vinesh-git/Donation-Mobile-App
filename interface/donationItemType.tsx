interface donationItemType {
    donationId : number,
    uri : string,
    badgeTitle : string,
    donationTitle : string,
    price : number,
    onPress? : (donationId : number) => void
}