export interface pictureWithIdType {
    picture:string
    id:number
}


export interface picturesWithIdType extends Array<pictureWithIdType> {

}


export interface pictureType{
    default:string
}

export interface oldPictureType{
    default:string
}



export interface picturesType extends Array<pictureType> {
 
}

export interface pictureWithIdType {
    picture:string
    id:number
}
