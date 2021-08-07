import Stickypost from './Stickypost';
import useFetch from './useFetch';

function Main() {
	const { data: contents } = useFetch(
		'https://jsonplaceholder.typicode.com/posts'
	);
	console.log(contents);

	return (
		<div className="posts-list">
			<div className="posts-container">
				{contents ? (
					contents.map((post) => <Stickypost data={post} key={post.id} />)
				) : (
					<p>Please Wait..</p>
				)}
			</div>
		</div>
	);
}

export default Main;
