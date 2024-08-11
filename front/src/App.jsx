import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Header from "./components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <div>
          Home Page
          <nav>
            <Link to="/Gallery">Gallery</Link>
            <Link to="/Contact">Contact</Link>
          </nav>
        </div>
      </div>
    ),
  },
  {
    path: "/Gallery",
    element: (
      <div>
        Gallery Page
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Contact">Contact</Link>
        </nav>
      </div>
    ),
  },
  {
    path: "/Contact",
    element: (
      <div>
        Contact Page
        <nav>
          <Link to="/Gallery">Gallery</Link>
          <Link to="/">Home</Link>
        </nav>
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
