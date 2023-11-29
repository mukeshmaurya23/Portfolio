import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import MainContainer from "./pages/MainContainer";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainContainer />,
      errorElement: <div>404</div>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
