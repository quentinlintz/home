import React from 'react';

import { pageview } from '../common';
import Header from './Header';
import Welcome from './Welcome';

const Home = () => {
  useEffect(() => {
    pageview('/');
  }, []);

  return (
    <>
      <Header />
      <Welcome />
    </>
  );
};

export default Home;
