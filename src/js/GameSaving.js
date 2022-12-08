export default class GameSaving {
    constructor(params) {
        for (let key in params) {
            this[key] = params[key];
        }
    }
}