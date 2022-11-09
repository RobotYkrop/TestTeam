import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './app/App';
import { store } from './app/store';

import './styles/index.scss';

ReactDOM.render(
  /* StrictMode renders components twice (on dev, but not production)
    in order to detect any problems with the code and warn about them. */
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
