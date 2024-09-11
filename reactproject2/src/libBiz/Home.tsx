import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            appname {window.cfg888}
      <p>home page..</p>
       <Link to="/addform">
        <button>Go to AddForm Page</button>
      </Link>
      <Link to="/table">
        <button>Go to Table Page</button>
            </Link>
        </>
   
  );
}

export default Home;