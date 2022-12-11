import GameSavingLoader from "./GameSavingLoader";

(async () => {
    try {
        const savings = await GameSavingLoader.load();
        return savings;
    } catch (e) {
        return e;
    }
})();
