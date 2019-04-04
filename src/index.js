import React from 'react';
import { render } from 'react-dom';
// import App from './components/App';

const rootElement = document.getElementById('app');
function App() {
    return (
      <div className="App">
        Hey
      </div>
    );
  }

render(<App />, rootElement);

if (module.hot) {
    module.hot.accept();
}