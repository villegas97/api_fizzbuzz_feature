const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();

app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({ message: "FizzBuzz Api Welcome!" });
});
app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});
app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const amount = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({ mission: request.params.mission, quantity: amount });
});
app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const usernames = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json(usernames);
});
app.get("/v1/fizzbuzz/:score", (request, response) => {
    const score = request.params.score;
    const fizzbuzz = ExplorerController.getFizzBuzz(score);
    response.json({ score: score, trick: fizzbuzz });
});
app.listen(port, () => {
    console.log(`FizzBuzz API in localhost: ${port}`);
});
