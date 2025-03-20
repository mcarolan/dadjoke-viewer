import path from "path";
import { Pact } from "@pact-foundation/pact";
import { createJokeService, JokeService } from "../../src/services/jokeservice";
import { like } from "@pact-foundation/pact/src/dsl/matchers";
import { API_VERSION } from "../../src/config/config";

const provider = new Pact({
  consumer: "dadjoke-viewer",
  provider: "dadjoke-service",
  port: 4000, // port for mock server
  log: path.resolve(process.cwd(), "pact/logs", "mockserver.log"),
  dir: path.resolve(process.cwd(), "pact/pacts"),
  logLevel: "info",
});

describe("JokeService Pact Test", () => {
    let jokeService: JokeService;

    beforeAll(() => provider.setup());
    afterAll(() => provider.finalize());

    beforeEach(() => {
        jokeService = createJokeService(provider.mockService.baseUrl, API_VERSION);
    });

    test("should fetech a list of jokes", async () => {
        const firstJokeId = 1;
        const firstJokeText = "Why don't skeletons fight each other? They don't have the guts.";

        const secondJokeId = 2;
        const secondJokeText = "I used to play piano by ear, but now I use my hands.";

        await provider.addInteraction({
            state: "there are 2 jokes available",
            uponReceiving: "a request for dad jokes",
            withRequest: {
                method: "GET",
                path: `/api/${API_VERSION}/jokes`
            },
            willRespondWith: {
                status: 200,
                headers: { "Content-Type": "application/json" },
                body: {
                    jokes: [
                        {
                            id: like(firstJokeId),
                            text: like(firstJokeText)
                        },
                        {
                            id: like(secondJokeId),
                            text: like(secondJokeText)
                        }
                    ]
                }
            }
        });

        const jokeListResponse = await jokeService.getJokes();

        expect(jokeListResponse.jokes).toHaveLength(2);
        expect(jokeListResponse.jokes[0]).toEqual({ id: firstJokeId, text: firstJokeText });
        expect(jokeListResponse.jokes[1]).toEqual({ id: secondJokeId, text: secondJokeText });

        await provider.verify();
    });
});