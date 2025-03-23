'use client'

import "../app/app.css"
import { Joke } from "@/types/joke";
import { useEffect, useState } from "react";
import JokeView from "./jokeview";
import { createJokeService, JokeService } from "@/services/jokeservice";
import { JokeDTO } from "@/types/jokedto";
import { API_BASE_URL, API_VERSION } from "@/config/config";

const App: React.FC = () => {
    const [jokes, setJokes] = useState<Joke[]>([]);
    const [currentJokeIndex, setCurrentJokeIndex] = useState<number>(0);

    const jokeService = createJokeService(API_BASE_URL, API_VERSION);

    useEffect(() => {
            jokeService
            .getJokes()
            .then((data) => {
                setJokes(data.jokes.map<Joke>(jokeDto => {
                    return {
                        id: jokeDto.id,
                        joke: jokeDto.text
                    };
                }));
            })
    }, [jokeService]);

    const showNextJoke = () => {
        setCurrentJokeIndex((prevIndex => (prevIndex + 1) % jokes.length));
    };

    return (
        <div className="App">
            <h1>Dad Jokes</h1>

            {jokes.length > 0 ? (
        <div>
          <JokeView joke={jokes[currentJokeIndex].joke} />
          <button onClick={showNextJoke}>Next Joke</button>
        </div>
      ) : (
        <p>Loading jokes...</p>
      )}
        </div>
    );
};

export default App;