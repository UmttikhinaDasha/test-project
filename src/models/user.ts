export interface IUserResponse {
    /** id пользователя*/
    readonly id: number | null;
    /** Имя пользователя*/
    readonly name: string;
    /** Имя пользователя на сайте */
    readonly username: string;
    /** Электронная почта */
    readonly email: string;
    /** Адрес */
    readonly address: {
        street: string,
        suite: string,
        city: string,
    }
    /** Номер телефона */
    readonly phone: string;
    /** Веб-сайт пользователя */
    readonly website: string;
}

export interface IUser {
    /** id пользователя*/
    readonly id: number | null;
    /** Имя пользователя*/
    readonly name: string;
    /** Имя пользователя на сайте */
    readonly userName: string;
    /** Электронная почта */
    readonly email: string;
    /** Адрес */
    readonly address: string;
    /** Номер телефона */
    readonly phone: string;
    /** Веб-сайт пользователя */
    readonly website: string;
}