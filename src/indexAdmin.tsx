import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./AppAdmin";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { storeAll } from "./role_all/store/storeAll";
import { store } from "./role_admin/store/store";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
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
