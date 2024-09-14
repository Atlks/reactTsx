// MyComponent.js  just us js fmt ,if ts fmt import react but err...cant run in brswr env..
 //import React from 'react';

//import  { useState, useEffect } from 'react';
//import React from 'react';
//import React from 'react';
//import fetch from 'node-fetch'; // Import node-fetch
import { fetchData8, createElement4data2tbl  } from './list.js';
export function MyComponent() {
    const   tableHTML = `<span>Hello, world555777999!</span>`
    return React.createElement('div', {
        dangerouslySetInnerHTML: {
            __html: tableHTML
        }
    });
    //finish
};

export function cmpnt2fun() {
    return React.createElement('div', null, 'Hello, cmpnt2!');
}
export function RenderData2CtrlAppdRoot(createElementFun,  rootElmt) {
   
    ReactDOM.render(
        React.createElement(createElementFun),  // ???????
        document.getElementById(rootElmt));
}

//bind data 2 table apped to Elmt
export function createElementx(datax,htmlx) {
    //import React, { useState, useEffect } from 'react';
    console.log("function TablePage*(")
    const { useState, useEffect } = React;
    //[] shi arr..
    const [data, setData] = useState([]); // ?????JSON?????
    const [loading, setLoading] = useState(false); // ??????????
    const [error, setError] = useState(null); // ????????

   console.log(1152)
    // ?? useEffect ?????????? fetchData
    //useEffect(async () => {
    //    setLoading(true);
    //    setData(datax); // ?????????         
    //}, []); // ??????????????????
    console.log(1153)
   // const data = await fetchData()

 

    return React.createElement('div', { dangerouslySetInnerHTML: { __html: htmlx  }    });
}
 