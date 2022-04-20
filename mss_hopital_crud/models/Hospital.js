class Hospital{
    // Explicit attributes
    id              // Hospital id
    name            // Hospital name
    location        // Hospital location
    number_of_beds  // Hospital's total number of beds
    ocupation       // Hospital's number of busy beds

    constructor(obj){
        Object.assign(this, obj);
    }

    toJsObject(){
        return {
            name: this.name,
            location: this.location,
            number_of_beds: this.number_of_beds,
            ocupation: this.ocupation
        }
    }
}

module.exports = {
    Hospital
}