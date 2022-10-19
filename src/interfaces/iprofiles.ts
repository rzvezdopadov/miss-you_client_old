export interface IFilterUsers {
    location: string,
    agestart: number,
    ageend: number,
    growthstart: number,
    growthend: number,
    weightstart: number,
    weightend: number,
    signzodiac: number,
    gendervapor: number,
    religion: number,
    smoke: number,
    alcohol: number,
    interests: [],
}

export interface IProfile {
    id: number,
    timecode: number,
    name: string,
    latitude: number,
    longitude: number,
    location: string,
    likes: [],
    age: number,
    birthday: number,
    monthofbirth: number,
    yearofbirth: number,
    growth: number,
    weight:number,
    gender: number,
    gendervapor: number,
    photomain: number,
    photolink: [],
    signzodiac: number,
    education: number,
    fieldofactivity: number,
    maritalstatus: number,
    children: number,
    religion: number,
    smoke: number,
    alcohol: number,
    discription: string,
    profit: number,
    interests: [],
    ilikecharacter: [],
    idontlikecharacter: [],
    filters: IFilterUsers,
}

export interface IProfileShort {
    id: number,
    timecode: number,
    name: string,
    age: number,
    gender: number,
    photomain: number,
    photolink: [],
    interests: [],
}

export interface IMessage {
    timecode: number,
    message: string,
}

export interface IDialog {
    timecode: number,
    name: string,
    age: number,
    photomain: number,
    photolink: [],
    messages: [IMessage],
}

export interface IDialogs {
    dialogs: [IDialog],
}
