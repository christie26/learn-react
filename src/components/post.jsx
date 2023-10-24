const name = ['etienne', 'yoonseo'];

function Post() {
	const chosenName = Math.random() > 0.3 ? name[0] : name[1];
	return <div>
		<p>hey I made one component!</p>
		<p>{chosenName}</p>
	</div>
}

export default Post;