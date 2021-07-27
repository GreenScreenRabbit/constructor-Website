

export interface roomType{
    name:string
    pictures:picturesType
    metersSquared:number

}

interface roomsType extends Array<roomType>{
}

interface pictureType{
    picture :string
    id:number
}

interface picturesType extends Array<pictureType> {
}



interface picturesHouseItselfType extends Array<pictureType> {

}









export interface apartmentType {
    homeInformation: string
    id:number
    metersSquared:number
    name:string
    picturesHouseItself:picturesHouseItselfType
    price:number
    rooms:roomsType
    whatsOutside:object[]
}


// export interface apartmentsType {
//     apartment : {[key:string]: apartmentType}
// }


export interface apartmentsType extends  Array<apartmentType> {

}







 