export class Product {
    constructor( // ? = optional
        public id?: number,
        public name?: string,
        public price?: number,
        public imageUrl?: string,
        public description?: string
    ) { }
}