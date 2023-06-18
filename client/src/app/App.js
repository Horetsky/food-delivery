import { RouterProvider } from "react-router-dom";
import { AppRouterProvider } from "../router/provider";

import './base.scss';

function App() {
  return (
    <div className="App">
      <RouterProvider router={AppRouterProvider}/>
    </div>
  );
}

export default App;
