import React from "react";

interface JokeProps {
    joke: string;
}

const JokeView: React.FC<JokeProps> = ({ joke }) => {
    return (
        <div className="joke-container">
            <p>{joke}</p>
        </div>
    );
};

export default JokeView;