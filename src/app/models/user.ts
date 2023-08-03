export class User {
    constructor(
        public name: string,
        public surname: string,
        public nickname: string,
        public email: string,
        public password: string,
        public password_confirmation: string,
        public gender: string,
        public phone: string
    ) {}
}