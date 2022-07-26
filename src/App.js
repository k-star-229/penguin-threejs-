import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DState from './components/dstate';
import Home from './pages/Home';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route 
            path = '/' 
            element = {
              <Home />
            } 
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;