import { RouterProvider } from "react-router-dom";
import router from "./router/app.router";

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
