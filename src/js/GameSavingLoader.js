import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
    static load() {
        return read().then(data => {
            return json(data);
        }).then(value => {
            return new GameSaving(JSON.parse(value));
        });
    }
}


