import {Pages} from "pages/pages";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

export const router = createBrowserRouter([
  { path: '*', element: <Pages /> },
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
