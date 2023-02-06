import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import AddNote from "./component/AddNote";
import DetailNote, { noteLoader } from "./component/DetailNote";
import EditNote, { noteEditLoader } from "./component/EditNote";
import store from "./store";
import Registration from "./Login/Registration";
import ProtectPage from "./ProtectPage";

import NotesProvider from "./NotesProvider";
import ThemeProvider from "./ThemeProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [{ path: "", element: <Registration /> }],
  },
  {
    path: "",
    element: <ProtectPage />,
    children: [
      {
        path: "/",
        element: <Navbar />,
        children: [
          { path: "about", element: <About /> },
          { path: "addNote", element: <AddNote /> },
          { path: "home", element: <Home /> },
          { path: "detailNote/:id", element: <DetailNote />, loader: noteLoader },
          { path: "editNote/:id", element: <EditNote />, loader: noteEditLoader },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider>
      <NotesProvider>
        <RouterProvider router={router} />
      </NotesProvider>
    </ThemeProvider>
  </Provider>
);
