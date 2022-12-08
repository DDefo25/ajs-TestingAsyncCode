import GameSavingLoader from '../GameSavingLoader';

test('Возвращает объект класса GameSaving', done => {
    const expectings = {
        id: 9,
        created: 1546300800,
        userInfo: {
            id: 1,
            name: 'Hitman',
            level: 10,
            points:2000
        }};
    GameSavingLoader.load().then(savings => {
        expect(savings).toEqual(expectings);
        done();
    });
});