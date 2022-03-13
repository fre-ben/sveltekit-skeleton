<script context="module" lang="ts">
	export async function load() {
		const posts = import.meta.globEager("../../posts/*.md");
		const postsList = Object.values(posts);
		const postsMeta = postsList.map((post) => {
			return post.metadata;
		});
		return {
			props: { posts: postsMeta }
		};
	}
</script>

<script>
	export let posts;
</script>

<div>
	<slot />
	<aside>
		<h5>Archive</h5>
		<ul>
			{#each posts as post}
				<li><a sveltekit:prefetch href={`/posts/${post.slug}`}>{post.title}</a></li>
			{/each}
			<li><a href="/posts">Home</a></li>
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
