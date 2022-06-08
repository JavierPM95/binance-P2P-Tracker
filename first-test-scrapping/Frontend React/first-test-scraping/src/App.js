import React, {
  Suspense,
  lazy,
} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// Style
import themeConfig from './materialize/themeConfig';
import { ThemeProvider } from '@material-ui/core/styles';

// Routes
import PublicRoutes from './routes/publicRoutes';

// Components
import Loading from './components/Loading/Loading';
import PublicRoute from './components/PublicRoutes/PublicRoutes';
import Container from '@material-ui/core/Container'
const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const Footer = lazy(() => import('./components/Footer/Footer'))
const PaginaNoEncontrada = lazy(() => import('./components/PaginaNoEncontrada/PaginaNoEncontrada'))


const _publicRoutes = PublicRoutes.map((route, index) => {
  let {
    name,
    path,
    exact,
    restricted,
    Component
  } = route;

  return (Component) ? (
    <PublicRoute
      name={name}
      key={index}
      path={path}
      exact={exact}
      component={Component}
      restricted={restricted}
    />
  ) : (null)
})

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={themeConfig}>
        <Container fixed>
          <Navbar />
          <Switch>
            {_publicRoutes}
            <Route path='*' component={PaginaNoEncontrada} />
          </Switch>
          <Footer />
        </Container>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
