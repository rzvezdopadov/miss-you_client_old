export interface IFilterParam {
	value: string | number;
	onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

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
    interests: Array<string>,
}

export interface IProfile {
    id: number,
    timecode: number,
    name: string,
    latitude: number,
    longitude: number,
    location: string,
    likes: Array<number>,
    age: number,
    birthday: number,
    monthofbirth: number,
    yearofbirth: number,
    growth: number,
    weight:number,
    gender: number,
    gendervapor: number,
    photomain: number,
    photolink: Array<string>,
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
    interests: Array<string>,
    ilikecharacter: Array<number>,
    idontlikecharacter: Array<number>,
    filters: IFilterUsers,
}

export interface IProfileShort {
    id: number,
    timecode: number,
    name: string,
    age: number,
    gender: number,
    photomain: number,
    photolink: Array<string>,
    interests: Array<string>,
}

export interface IMessage {
    timecode: number,
    idUser: number,
    message: string,
}

export interface IDialog {
    timecode: number,
    idUser: number,
    name: string,
    age: number,
    photomain: number,
    photolink: Array<string>,
    messages: Array<IMessage>,
}
