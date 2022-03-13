<header>
	<h1 class="text-4xl">First Svelte App</h1>
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/posts">Posts</a>
	</nav>
</header>

<style lang="scss">
	$color: lightgrey;

	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: $color;
		padding: 1em 0;

		nav {
			color: royalblue;
		}
	}
</style>
