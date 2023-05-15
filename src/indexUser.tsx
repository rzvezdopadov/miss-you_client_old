import "./index.css";
import * as ReactDOM from "react-dom/client";
import App from "./AppUser";
import { Provider } from "react-redux";
import { storeAll } from "./role_all/store/storeAll";
import { BrowserRouter } from "react-router-dom";
import { store } from "./role_user/store/store";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLDivElement
);

let renderEntireTree = () => {
	root.render(
		<Provider store={storeAll}>
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		</Provider>
	);
};

renderEntireTree();

store.subscribe(renderEntireTree);
storeAll.subscribe(renderEntireTree);
