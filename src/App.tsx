import { Component, Show } from 'solid-js';

import './assets/css/app.css'
import { A, Route, Routes, useLocation } from '@solidjs/router';
import RetailPage from './pages/retail';
import ComunityPage from './pages/comunity';
import HomePage from './pages/home';
import FoodPage from './pages/food';


const App: Component = () => {
  const location = useLocation();
  return (
    <div class='app'>

      <Show when={location.pathname !== '/'}>
        <nav class='nav app-home__nav'>
          <A class='app__nav-link' href='/'>Home</A>
        </nav>
      </Show>
      <Show when={location.pathname === '/'}>
        <main class='main'>
          <Routes>
            <Route path={'/'} component={HomePage} />
          </Routes>
        </main>
      </Show>


      <Show when={location.pathname !== '/food'}>
        <nav class='nav app-food__nav'>
          <A class='app__nav-link' href='/food'>Food</A>
        </nav>
      </Show>
      <Show when={location.pathname == '/food'}>
        <div class='main main-food'>
          <Routes>
            <Route path={'/food'} component={FoodPage} />
          </Routes>
        </div>
      </Show>


      <Show when={location.pathname !== '/retail'}>
        <nav class='nav app-retail__nav'>
          <A class='app__nav-link' href='/retail'>retail</A>
        </nav>
      </Show>
      <Show when={location.pathname == '/retail'}>
        <div class='main main-retail'>
          <Routes>
            <Route path={'/retail'} component={RetailPage} />
          </Routes>
        </div>
      </Show>


      <Show when={location.pathname !== '/community'}>
        <nav class='nav app-community__nav'>
          <A class='app__nav-link' href='/community'>community</A>
        </nav>
      </Show>
      <Show when={location.pathname == '/community'}>
        <div class='main main-community'>
          <Routes>
            <Route path={'/community'} component={ComunityPage} />
          </Routes>
        </div>
      </Show>

    </div>
  );
};

export default App;
