import { Pages } from 'pages/pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { setupStore } from 'store/store';
import { Provider } from 'react-redux';
import { ReactElement } from 'react';

export const router = createBrowserRouter([{ path: '*', element: <Pages /> }]);

const store = setupStore();

export const App = (): ReactElement => (
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);

export default App;
