// MyComponent.js
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

 
