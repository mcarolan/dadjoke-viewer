import { JokeDTO } from "@/types/jokedto";
import { JokeListDTO } from "@/types/jokelistdto";
import axios from "axios";

export interface JokeService {
  getJokes: () => Promise<JokeListDTO>;
}

export function createJokeService(baseUrl: string): JokeService {
  return {
    getJokes: async () => {
      try {
        const response = await axios.get(`${baseUrl}/jokes`);
        return response.data;
      } catch (error) {
        console.error("Error fetching jokes:", error);
        throw new Error("Failed to fetch jokes");
      }
    },
  };
}
