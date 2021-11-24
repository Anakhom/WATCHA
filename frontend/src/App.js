import './App.css';
import { useRoutes } from 'react-router';
import { Nav } from './components/navigation/Nav';
import { Footer } from './components/footer/Footer';
import { MainPage } from './components/main page/MainPage';

const routes = [
  {
    path: '/',
    element: <MainPage />,
  },
  // {
  //   path: '/auth/:authPath', 
  //   element: <AuthForm />
  // },
  // {
  //   path: '/profile/:id', 
  //   element: <ProfilePage />
  // },
  // {
  //   path: '/game/start',
  //   element: <Game />
  // },
  // {
  //   path: '/game/finish',
  //   element: <Finish />
  // }
]

function App() {

  const content = useRoutes(routes);

  return (
    <div className="App">
      <Nav />
      {content}
      <Footer />
    </div>
  );
}

export default App;
