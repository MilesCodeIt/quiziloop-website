import type { NextApiRequest, NextApiResponse } from "next";
import type { QuizSmallMetadata } from "types/Quiz"; 

type Data = {
    success: boolean
    quizes: QuizSmallMetadata[]
}

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({
        success: true,
        quizes: [
            {
                quizId: 0,
                author: "Vexcited",
                name: "A small test for you !"
            }
        ]
    });
}