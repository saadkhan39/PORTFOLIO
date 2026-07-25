import React from 'react';
import AppRoutes from './AppRoutes';
import SmoothScroll from './SmoothScroll';

const App = () => {
  return (
    <SmoothScroll>
      <AppRoutes />
    </SmoothScroll>
  );
};

export default App;