/** Представляет данные пользователя, которые приходят с сервера. */
export interface IUserResponse {

    /** Id пользователя.*/
    readonly id: number | null;

    /** Имя пользователя.*/
    readonly name: string;

    /** Имя пользователя на сайте.*/
    readonly username: string;

    /** Электронная почта.*/
    readonly email: string;

    /** Адрес проживания.*/
    readonly address: {

        /** Улица.*/
        street: string;

        /** Квартира.*/
        suite: string;

        /** Город.*/
        city: string;
    };

    /** Номер телефона. */
    readonly phone: string;

    /** Веб-сайт пользователя. */
    readonly website: string;
}

/** Представляет данные пользователя, которые используются в компонентах. */
export interface IUser {

    /** Id пользователя.*/
    readonly id: number | null;

    /** Имя пользователя.*/
    readonly name: string;

    /** Имя пользователя на сайте. */
    readonly userName: string;

    /** Электронная почта. */
    readonly email: string;

    /** Адрес. */
    readonly address: string;

    /** Номер телефона. */
    readonly phone: string;

    /** Веб-сайт пользователя. */
    readonly website: string;
}
