import styles from "./page.module.css";
import { JokeService, createJokeService } from "@/services/jokeservice";
import { API_BASE_URL } from "@/config/config";
import App from "@/components/app";

const jokeService: JokeService = createJokeService(API_BASE_URL);

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <App />
      </main>
    </div>
  );
}
