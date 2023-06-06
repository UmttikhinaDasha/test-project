export interface IPost {
    /** id пользователя, которому принадлежит пост */
    readonly userId: number;
    /** идентификатор записи */
    readonly id: number;
    /** Заголовок поста */
    readonly title: string;
    /** Тект поста */
    readonly body: string;
}