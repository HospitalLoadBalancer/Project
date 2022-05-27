class Hospital{
    // Explicit attributes
    id                                                // Hospital id
    name                                              // Hospital name
    location = {lat:undefined, lng:undefined}         // Hospital location
    address                                           // Hospital address
    number_of_beds                                    // Hospital's total number of beds
    occupation                                         // Hospital's number of busy beds

    constructor(obj){
        Object.assign(this, obj)
    }

    checkHospitalProperties(){
        for(const [key, value] of Object.entries(this)){
            if(value === undefined)
                throw new Error("Not all properties of Hospital were initialized, please rewhatch the body you are sending!\nSource Problem: "+key)
            
            else if(key === "location")
                if(this.location.lat === undefined || this.location.lng === undefined)
                    throw new Error("Not all properties of Hospital were initialized, please rewhatch the body you are sending!\nSource Problem: "+key)  
        }
    }

    toJsObject(){
        return {
            name: this.name,
            location: this.location,
            address: this.address,
            number_of_beds: this.number_of_beds,
            occupation: this.occupation
        }
    }
}

module.exports = {
    Hospital
}