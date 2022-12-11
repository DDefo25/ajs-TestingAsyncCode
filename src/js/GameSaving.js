export default class GameSaving {
    constructor(params) {
        for (const key in params) {
            this[key] = params[key];
        }
    }
}
