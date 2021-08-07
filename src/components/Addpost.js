import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Addpost() {
	const [title, setTitle] = useState('');

	const [userverification, setUserverification] = useState('');
	const [content, setContent] = useState('');

	const history = useHistory();

	const addPost = (e) => {
		e.preventDefault();

		const newPost = { title, userverification, content };

		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(newPost),
		})
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				alert('*Post added!');
				history.push('/');
			});
	};
	return (
		<div className="add-post">
			<h2>Add New Post</h2>

			<form onSubmit={addPost}>
				<label>Title</label>
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<label>Author</label>
				<input
					type="text"
					value={userverification}
					onChange={(e) => setUserverification(e.target.value)}
				/>

				<label>Add body</label>
				<textarea
					type="text"
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>

				<button>Publish</button>
			</form>
		</div>
	);
}

export default Addpost;
