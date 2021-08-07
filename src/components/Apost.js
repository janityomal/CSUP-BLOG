import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

function Apost() {
	const { id } = useParams();
	const history = useHistory();

	const { data: post } = useFetch(
		'https://jsonplaceholder.typicode.com/posts/' + id
	);

	const deletePost = () => {
		fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
			method: 'DELETE',
		}).then(() => {
			alert('*Post deleted!');
			history.push('/');
		});
	};
	return (
		<div className="content">
			{post && (
				<>
					{' '}
					<img src="https://picsum.photos/500/300" alt="header" />
					<div className="header-text">
						<h1>{post.title}</h1>
						<div className="btn-section">
							<button className="delete" onClick={deletePost}>
								Delete
							</button>
						</div>
					</div>
					<p>{post.userverification}</p>
					<div className="text-content">
						<p>{post.body}</p>
					</div>
				</>
			)}
		</div>
	);
}

export default Apost;
