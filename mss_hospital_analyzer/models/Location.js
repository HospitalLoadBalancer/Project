class Location{
    // Explicit attributes
    latitude        // User latitude
    longitude       // User longitude
    address         // User address

    constructor(obj){
        Object.assign(this, obj)
    }

    toJsObject(){
        return {
            latitude: this.name,
            longitude: this.longitude,
            address: this.address
        }
    }
}

module.exports = {
    Location
}