import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './components/Main';
import Navcolumn from './components/Navcolumn';
import Addpost from './components/Addpost';
import Apost from './components/Apost';

function App() {
	return (
		<Router>
			<Navcolumn />
			<Switch>
				<Route exact path="/">
					<Main />
				</Route>

				<Route path="/create">
					<Addpost />
				</Route>

				<Route path="/posts/:id">
					<Apost />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
