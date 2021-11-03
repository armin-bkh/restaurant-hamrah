import "./App.scss";
import { Route, Switch } from "react-router-dom";
import { routes } from "../Routes/Routes";
import { ToastProvider } from "react-toast-notifications";
import ScrollIndicator from "../Components/Common/ScrollIndicator/ScrollIndicator";

//yeah

const App = () => {
  return (
    <ToastProvider autoDismiss={true} newestOnTop={true}>
    <ScrollIndicator />
      <Switch>
        {routes.map(route => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </ToastProvider>
  );
};

export default App;
