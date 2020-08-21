import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//리덕스 사용을 위한 Prover객체 참조
import { Provider } from 'react-redux';

//리덕스 폴더에서 만들어둔 스토어구성함수 호출
import configureStore from 'store/index';

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
