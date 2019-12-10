import { __awaiter } from "tslib";
export var Delays;
(function (Delays) {
    Delays[Delays["Short"] = 500] = "Short";
    Delays[Delays["Medium"] = 2000] = "Medium";
    Delays[Delays["Long"] = 5000] = "Long";
})(Delays || (Delays = {}));
function delayedHello(name, delay = Delays.Medium) {
    return new Promise((resolve) => setTimeout(() => resolve(`Hello, ${name}`), delay));
}
export function greeter(name) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield delayedHello(name, Delays.Long);
    });
}
//# sourceMappingURL=main.js.map