import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  try {
    return (
      <>
        <div className="container-fluid">
          <h1>Home</h1>
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Home;
