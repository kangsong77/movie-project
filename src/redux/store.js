import { createStore } from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

//리액트 스토어를 생성하고 구성해서 스토어를 반환하는 함수
export function configureStore() {
  //스토어 객체를 생성하고 반환한다
  const store = createStore(reducers, composeWithDevTools());

  return store;
}
