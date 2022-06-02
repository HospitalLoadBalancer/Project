export interface Hospital{
    id:string,
    name: string,
    location:{ lat: string, lng: string},
    address: string,
    number_of_beds: string,
    occupation : string
}