import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className='section error-page'>
      <div className='eroor-contaoner'>
        <h1>opps! there is something wrong</h1>
        <Link to='/' className='btn brn-primary'>
          Back Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
