/* @refresh reload */
import { render } from 'solid-js/web';

import App from './App';
import { Router } from '@solidjs/router';
import { Link, MetaProvider } from '@solidjs/meta';
import './assets/css/index.css'

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

render(() => (
  <Router>
    <MetaProvider>
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin='use-credentials' />
      <Link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&display=swap" rel="stylesheet" />
      <Link rel="icon" type="image/png" sizes="32x32" href="https://images.prismic.io/canalstreetmarket/9ace5347606c7e4937a495000d7a7f29cb42a3f5_favicon-310x310.png?auto=compress,format" />
    </MetaProvider>
    <App />
  </Router>
), root!);
