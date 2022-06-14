const ExplorerController = require("./../../lib/controllers/ExplorerController");
describe("Unit test for Explorer Controller", () => {
    test("1) Test to get explorers by mission", () => {
        const test1 = ExplorerController.getExplorersByMission("node");
        expect(test1.length).toBe(10);
    });

    test("2) Test to get explorers usernames by mission", () => {
        const test2 = ExplorerController.getExplorersUsernamesByMission("java");
        expect(test2[0]).toBe("ajolonauta6");
    });

    test("3) Test to get explorers amount by mission", () => {
        const test3 = ExplorerController.getExplorersAmonutByMission("java");
        expect(test3).toBe(5);
    });
});
