// MyComponent.js
 //import React from 'react';

//import  { useState, useEffect } from 'react';
//import React from 'react';

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



export function TablePage() {
    //import React, { useState, useEffect } from 'react';
    console.log("function TablePage*(")
    const { useState, useEffect } = React;
    //[] shi arr..
    const [data, setData] = useState([]); // ?????JSON?????
    const [loading, setLoading] = useState(false); // ??????????
    const [error, setError] = useState(null); // ????????

      async function fetchData2() {
        console.log("function fetchData");
        const { useState, useEffect } = React;
        console.log(1157)
        //Invalid hook call. Hooks can only be called inside of the body of a function component
      //  const [data, setData] = useState([]); // ?????JSON?????
        console.log(1158)
        // setLoading(true); // ??????
        //  setError(null); // ???????
        try {
            const response = await fetch('http://localhost:8080/list422.json');
            // ??JSON??
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json(); // ??JSON??
            console.log(1155)
            setData(result); // ?????????
            console.log(1156)

        } catch (error) {
            console.log(error)
            //  setError(error); // ??????
        } finally {
            // setLoading(false); // ??????
        }
    }
    console.log(1152)
    // ?? useEffect ?????????? fetchData
    useEffect(() => {
        fetchData2(); // ????????? fetchData ??
    }, []); // ??????????????????
    console.log(1153)

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
// ????????
export async function fetchData() {
    console.log("function fetchData");

  //  import React, { useState, useEffect } from 'react';
  //  const { useState, useEffect } = React;
    console.log(1157)
    //Invalid hook call. Hooks can only be called inside of the body of a function component
    const [data, setData] = useState([]); // ?????JSON?????
    console.log(1158)
   // setLoading(true); // ??????
  //  setError(null); // ???????
    try {
        const response = await fetch('http://localhost:8080/list422.json');
        // ??JSON??
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json(); // ??JSON??
        console.log(1155)
        setData(result); // ?????????
        console.log(1156)

    } catch (error) {
       console.log(error)
      //  setError(error); // ??????
    } finally {
       // setLoading(false); // ??????
    }
}