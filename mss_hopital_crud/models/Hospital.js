class Hospital{
    // Explicit attributes
    id              // Hospital id
    name            // Hospital name
    latitude        // Hospital latitude
    longitude       // Hospital longitude
    address         // Hospital address
    number_of_beds  // Hospital's total number of beds
    ocupation       // Hospital's number of busy beds

    constructor(obj){
        Object.assign(this, obj);
    }

    toJsObject(){
        return {
            name: this.name,
            latitude: this.latitude,
            longitude: this.longitude,
            address: this.address,
            number_of_beds: this.number_of_beds,
            ocupation: this.ocupation
        }
    }
}

module.exports = {
    Hospital
}