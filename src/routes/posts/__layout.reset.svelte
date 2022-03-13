<div>
	<slot />
	<aside>
		<h5>Archive</h5>
		<ul>
			<li><a href="/posts">Home</a></li>
			<li><a href="/posts/about">About</a></li>
			<li><a href="/">Three</a></li>
			<li><a href="/">Four</a></li>
		</ul>
	</aside>
</div>

<style>
	aside {
		display: flex;
		flex-direction: column;
		padding: 0.2em 2em;
		margin-top: 1em;
		border-top: 2px solid black;
		width: 50%;
	}
</style>
