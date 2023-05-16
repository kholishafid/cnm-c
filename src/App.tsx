import { Component, Show, createSignal } from 'solid-js';

import './assets/css/app.css'
import { A, Route, Routes, useLocation } from '@solidjs/router';
import RetailPage from './pages/retail';
import ComunityPage from './pages/comunity';
import HomePage from './pages/home';
import FoodPage from './pages/food';
import { Transition } from 'solid-transition-group';
import menuIcon from './assets/icon/menu.svg'


const App: Component = () => {
  const location = useLocation();
  const [navActive, setNavActive] = createSignal(false);

  const toggleNav = (): void => {
    const screen: number = window.screen.width;
    if (screen > 1270) {
      setNavActive(false);
      return;
    };
    setNavActive(!navActive())
  }
  return (
    <div class='app'>
      <nav class='mobile-nav'>
        <img src={menuIcon} alt="menu" class='amobile-nav__menu-icon' onClick={toggleNav} />
      </nav>
      <A
        class={`app-home__nav ${navActive() ? 'mobile-show' : 'base-nav'}`}
        href='/'
        onclick={toggleNav}
      >
        <Transition name='nav-fade'>
          <Show when={location.pathname !== '/'}>
            <span class='nav__name'>Home</span>
          </Show>
        </Transition>
      </A>
      <Transition name='slide-fade'>
        <Show when={location.pathname === '/'}>
          <main class='main'>
            <div class="content">
              <Routes>
                <Route path={'/'} component={HomePage} />
              </Routes>
            </div>
          </main>
        </Show>
      </Transition>


      <A
        class={`app-food__nav ${navActive() ? 'mobile-show' : 'base-nav'}`}
        href='/food'
        onclick={toggleNav}
      >
        <Transition name='nav-fade'>
          <Show when={location.pathname !== '/food'}>
            <span class='nav__name'>Food</span>
          </Show>
        </Transition>
      </A>
      <Transition name='slide-fade'>
        <Show when={location.pathname == '/food'}>
          <div class='main main-food'>
            <div class="content">
              <Routes>
                <Route path={'/food'} component={FoodPage} />
              </Routes>
            </div>
          </div>
        </Show>
      </Transition>


      <A
        class={`app-retail__nav ${navActive() ? 'mobile-show' : 'base-nav'}`}
        href='/retail'
        onclick={toggleNav}
      >
        <Transition name='nav-fade'>
          <Show when={location.pathname !== '/retail'}>
            <span class='nav__name'>retail</span>
          </Show>
        </Transition>
      </A>
      <Transition name='slide-fade'>
        <Show when={location.pathname == '/retail'}>
          <div class='main main-retail'>
            <div class="content">
              <Routes>
                <Route path={'/retail'} component={RetailPage} />
              </Routes>
            </div>
          </div>
        </Show>
      </Transition>


      <A
        class={`app-community__nav ${navActive() ? 'mobile-show' : 'base-nav'}`}
        href='/community'
        onclick={toggleNav}
      >
        <Transition name='nav-fade'>
          <Show when={location.pathname !== '/community'}>
            <span class='nav__name'>community</span>
          </Show>
        </Transition>
      </A>
      <Transition name='slide-fade'>
        <Show when={location.pathname == '/community'}>
          <div class='main main-community'>
            <div class="content">
              <Routes>
                <Route path={'/community'} component={ComunityPage} />
              </Routes>
            </div>
          </div>
        </Show>
      </Transition>

    </div >
  );
};

export default App;
