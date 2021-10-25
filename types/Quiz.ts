/**
 * This type is used to display a small amount
 * of informations about a quiz.
 */
export type QuizSmallMetadata = {
    quizId: number
    author: string
    name: string
}

/**
 * This type is used to display complete metadata
 * about a quiz.
 * 
 * // TODO
 */
export interface QuizMetadata extends QuizSmallMetadata {
    creationDate: Date
}