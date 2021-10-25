# Quiziloop

> Quiz player that features "quizlists", randomizer, quiz sharing, and even more !

## Still in development.

## Tech Stack

I use Vercel to deploy the app and the serverless functions.
I also use MongoDB Atlas for the database.

## Development

### How it works

When you load the homepage `/`, it requests the `/api/quiz/latest` endpoint.
This endpoint returns the latest publicly submitted quizes.
So basically, it just returns the `author`, `name` and `creationDate`.

When you click on this quiz, you'll be redirected to `/quiz/:quizId`.
To get the quiz informations, we make another request to `/api/quiz/:quizId/informations` endpoint.
It returns the same thing that we had on the homepage (`author`, `name`, `creationDate`)
but with more precisions (`timesPlayed`, `questionCount`, ...).

Now, when you click `Play`, it makes a request to `/api/quiz/:quizId/question/initialize` endpoint.
It will return every questions that is the quiz have.

So, you play the quiz, and every question that you submit, will request `/api/quiz/:quizId/question/:questionId` endpoint. This endpoint, returns only if your `answer` was `true` or `false`.
Depending on the quiz settings, it can returns 

### Start development server

Clone this repository, `cp .env.local.sample .env.local`,
edit the `.env.local` file to match with your configuration,
install depedencies with `yarn`,
then run development server with `yarn dev`.