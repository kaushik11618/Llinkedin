import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import 'react-quill/dist/quill.snow.css';
import { router } from "./Routes";
import './App.css';

function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    <ToastContainer />
  </div>
  );
}

export default App;
