/** Интерфейс, который представляет данные поста. */
export interface IPost {

    /** Id пользователя, которому принадлежит пост. */
    readonly userId: number;

    /** Идентификатор записи. */
    readonly id: number;

    /** Заголовок поста. */
    readonly title: string;

    /** Тект поста. */
    readonly body: string;
}
