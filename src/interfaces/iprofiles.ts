export interface IProfile {
    email:string,
    password: string,
    jwt: string,
    id: number,
    name: string,
    latitude: number,
    longitude: number,
    location: string,
    likes: number,
    age: number,
    birthday: number,
    monthOfBirth: number,
    yearOfBirth: number,
    gender: number,
    genderVapor: number,
    photoMain: number,
    photoLink: [],
    signZodiac: number,
    education: number,
    fieldOfActivity: number,
    maritalStatus: number,
    children: number,
    religion: number,
    rise: number,
    smoke: number,
    alcohol: number,
    discription: string,
    profit: number,
    interests: [],
    iLikeСharacter: [],
    iDontLikeСharacter: [],
    vapors: [],
    likePeople: [],
    dislikePeople: [], 
}

export interface IProfileShort {
    jwt: string,
    email: string,
    password: string,
}