export interface ICountry {
    id?: number;
    iso2?: string;
    iso3?: string;
    m49?: number;
    name?: string;
    officialNameEn?: string;
    officialNameFr?: string;
    dial?: string;
    tld?: string;
    flag32?: string;
    flag128?: string;
    latitude?: string;
    longitude?: string;
    zoom?: number;
}

export class Country implements ICountry {
    constructor(
        public id?: number,
        public iso2?: string,
        public iso3?: string,
        public m49?: number,
        public name?: string,
        public officialNameEn?: string,
        public officialNameFr?: string,
        public dial?: string,
        public tld?: string,
        public flag32?: string,
        public flag128?: string,
        public latitude?: string,
        public longitude?: string,
        public zoom?: number
    ) {}
}
