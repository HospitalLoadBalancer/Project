class Location{
    // Explicit attributes
    lat        // User latitude
    lng       // User longitude
    address         // User address

    constructor(obj){
        Object.assign(this, obj)
    }

    toJsObject(){
        return {
            lat: this.lat,
            lng: this.lng,
            address: this.address
        }
    }
}

module.exports = {
    Location
}