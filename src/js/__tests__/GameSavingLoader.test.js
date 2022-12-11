import GameSavingLoader from "../GameSavingLoader";
import read from "../reader";

jest.mock("../reader");

beforeEach(() => {
    jest.resetAllMocks();
});

test("Возвращает объект класса GameSaving", (done) => {
    const expectings = {
        id: 9,
        created: 1546300800,
        userInfo: {
            id: 1,
            name: "Hitman",
            level: 10,
            points: 2000,
        },
    };
    (async () => {
        const resolveRead = () => {
            const data = "{\"id\":9,\"created\":1546300800,\"userInfo\":{\"id\":1,\"name\":\"Hitman\",\"level\":10,\"points\":2000}}";
            return ((input) => {
                const buffer = new ArrayBuffer(input.length * 2);
                const bufferView = new Uint16Array(buffer);
                for (let i = 0; i < input.length; i += 1) {
                    bufferView[i] = input.charCodeAt(i);
                }
                return buffer;
            })(data);
        };
        read.mockImplementation(() => Promise.resolve(resolveRead()));
        const savings = await GameSavingLoader.load();
        expect(savings).toEqual(expectings);
        done();
    })();
});

test("Возвращает ошибку read в классе GameSaving", (done) => {
    (async () => {
        read.mockImplementation(() => Promise.reject(new Error("Read error message")));
        const savings = await GameSavingLoader.load();
        expect(savings).toEqual(new Error("Read error message"));
        done();
    })();
});
