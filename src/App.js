import React from 'react';
import './App.css';

import {
  Header,
  Showcase,
  Cards,
  Services,
  Details,
  Footer,
} from './components';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Showcase />
        <Services />
        <Details />
      </main>
      <Footer />
    </div>
  );
};

export default App;
