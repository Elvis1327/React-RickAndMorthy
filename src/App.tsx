import { RootRouter } from "./routes/RootRouter";
import { store } from './store/store';
import { Provider } from 'react-redux';

export const App = () => {

  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  );
};



