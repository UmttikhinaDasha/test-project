import { Pages } from 'pages/pages';
import { setupStore } from 'store/store';
import { Provider } from 'react-redux';
import { ReactElement } from 'react';

const store = setupStore();

export const App = (): ReactElement => (
    <Provider store={store}>
        <Pages />
    </Provider>
);

export default App;
