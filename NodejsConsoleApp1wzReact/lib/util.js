var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function fetchx(url) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("function fetchData");
        console.log(1157);
        //Invalid hook call. Hooks can only be called inside of the body of a function component
        console.log(1158);
        // setLoading(true); // ??????
        //  setError(null); // ???????
        try {
            const response = yield fetch(url);
            // ??JSON??
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = yield response.json(); // ??JSON??
            console.log(1155);
            return result;
            //   console.log(1156)
        }
        catch (error) {
            console.log(error);
            //  setError(error); // ??????
        }
        finally {
            // setLoading(false); // ??????
        }
    });
}
//# sourceMappingURL=util.js.map