import Navigator from "./Navigator";

import { PersistGate } from "redux-persist/integration/react";

// Redux
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import Loading from "./components/Loading";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={Loading}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
}
