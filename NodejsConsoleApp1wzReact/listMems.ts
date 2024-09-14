import { React_createElement } from './lib/utilReact.js'; // ??????
import { fetchx } from './lib/util.js';
export async function createElementFun4listMem() {
    //const data = await fetchx();
    var result = await fetchx('http://localhost:8080/list422.json');

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
             `  // ????????????????
    return () => {return React_createElement(tableHTML); }
        
   
}

