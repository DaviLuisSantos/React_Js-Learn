import Head from 'next/head'

import React from 'react';
import Cabeca from "next/head";

const Home: React.FC = () => {
  return (
    <div>
      <Cabeca>
        <title>Homepage</title>
      </Cabeca>

      <main>
        <h1>Hello World! Porra </h1>

      </main>
    </div>
  )
}

export default Home