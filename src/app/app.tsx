import {Pages} from "pages/pages";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {setupStore} from "store/store";
import {Provider} from "react-redux";

export const router = createBrowserRouter([
    {path: '*', element: <Pages/>},
]);

const store = setupStore();

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    );
}

export default App;
