import { Link } from 'react-router-dom';

function Stickypost({ data }) {
	return (
		<div className="posts-tile">
			<div className="top">
				<img src="https://picsum.photos/300/200" alt="header" />
			</div>
			<div className="title">
				<span>{data.title}</span>
			</div>
			<div className="Author">
				<span>By : {data.userverification}</span>
			</div>

			<Link to={`/posts/${data.id}`}>
				<button>Read More</button>
			</Link>
		</div>
	);
}

export default Stickypost;
