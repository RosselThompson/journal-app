import { AppRouter } from "./routers/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";

const JournalApp = () => (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

export default JournalApp;
