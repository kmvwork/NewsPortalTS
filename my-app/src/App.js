import React from 'react';
import Header from './components/header/header.tsx';
import Main from './components/main/main.tsx';
import News from './components/news/news.tsx';
import Load from './components/load/load.tsx';
import Footer from './components/footer/footer.tsx';




import './App.scss';

function App() {
  return (
    <>
      <Header />
      <Main />
      <News />
      <Load />
      <Footer />
    </>
  );
}

export default App;
