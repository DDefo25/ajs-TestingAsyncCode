import GameSavingLoader from './GameSavingLoader';


GameSavingLoader.load().then(savings => {
    console.log(savings);
}, (error) => {
    return error;
});