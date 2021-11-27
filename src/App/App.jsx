import "./App.scss";
import { useRoutes } from "react-router-dom";
import { routes } from "../Routes/Routes";
import { ToastProvider } from "react-toast-notifications";
import ScrollIndicator from "../Components/Common/ScrollIndicator/ScrollIndicator";

//yeah

const App = () => {
  const appRoutes = useRoutes(routes);
  return (
    <ToastProvider autoDismiss={true} newestOnTop={true}>
      <ScrollIndicator />
      {appRoutes}
    </ToastProvider>
  );
};

export default App;
