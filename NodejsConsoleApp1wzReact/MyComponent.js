// MyComponent.js
 //import React from 'react';

//import  { useState, useEffect } from 'react';
//import React from 'react';
//import React from 'react';
//import fetch from 'node-fetch'; // Import node-fetch
import { fetchData8  } from './list.js';
export function MyComponent() {
    return React.createElement('div', {
        dangerouslySetInnerHTML: {
            __html: '<span>Hello, world555777999!</span>'
        }
    });
    //finish
};

export function cmpnt2fun() {
    return React.createElement('div', null, 'Hello, cmpnt2!');
}



export   function TablePage() {
    //import React, { useState, useEffect } from 'react';
    console.log("function TablePage*(")
    const { useState, useEffect } = React;
    //[] shi arr..
    const [data, setData] = useState([]); // ?????JSON?????
    const [loading, setLoading] = useState(false); // ??????????
    const [error, setError] = useState(null); // ????????

   console.log(1152)
    // ?? useEffect ?????????? fetchData
    useEffect(async () => {
        setLoading(true);
        setData( await fetchData8()); // ?????????         
    }, []); // ??????????????????
    console.log(1153)
   // const data = await fetchData()

    const tableHTML = `  <table>  <thead> <tr>  <th>ID</th><th>Name</th> </tr> </thead>
                         <tbody>                            
                                 ${data.map(item => `
                                      <tr key="${item.id}">
                                        <td>${item.id}</td>
                                        <td>${item.name}</td>
                                      </tr>
                                    `).join('')}
                         </tbody>
                     </table>
              `  // ????????????????

    return React.createElement('div', {    dangerouslySetInnerHTML: {  __html: tableHTML  }    });
}
 