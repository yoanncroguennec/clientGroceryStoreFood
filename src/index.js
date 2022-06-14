import React from "react";
import ReactDOM from "react-dom";
// REDUX
import { Provider } from 'react-redux';
import {store} from "./client/utils/redux/Store"
// STYLES
import "./admin/styles/scss/Index.scss"
// CONTEXT
import { AuthContextProvider } from "./admin/utils/context/AuthContext";
import { DarkModeContextProvider } from "./admin/utils/context/darkModeContext";
import { UserProfileContextProvider } from "./client/utils/context/UserProfileContext";
// CONTAINER
import AppContainer from "./containers/AppContainer"


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProfileContextProvider>
        <AuthContextProvider>
          <DarkModeContextProvider>
            <AppContainer /> 
          </DarkModeContextProvider>
        </AuthContextProvider>
      </UserProfileContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
