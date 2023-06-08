export interface IComment {
    /** Идентификатор комментария */
    readonly id: number;
    /** Идентификатор поста */
    readonly postId: number;
    /** Почта комментирующего */
    readonly email: string;
    /** Текст комментария */
    readonly body: string;
}