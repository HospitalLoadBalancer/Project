
class Hospital{
    id
    name
    location
    number_of_beds
    ocupation

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