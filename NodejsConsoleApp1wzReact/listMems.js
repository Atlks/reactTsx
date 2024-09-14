var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { React_createElement } from './lib/utilReact.js'; // ??????
import { fetchx } from './lib/util.js';
export function createElementFun4listMem() {
    return __awaiter(this, void 0, void 0, function* () {
        //const data = await fetchx();
        var result = yield fetchx('http://localhost:8080/list422.json');
        const tableHTML = `  <table>  <thead> <tr>  <th>ID</th><th>Name</th> </tr> </thead>
                        <tbody>                            
                                ${result.map(item => `
                                     <tr key="${item.id}">
                                       <td>${item.id}</td>
                                       <td>${item.name}</td>
                                     </tr>
                                   `).join('')}
                        </tbody>
                    </table>
             `; // ????????????????
        return () => { return React_createElement(tableHTML); };
    });
}
//# sourceMappingURL=listMems.js.map