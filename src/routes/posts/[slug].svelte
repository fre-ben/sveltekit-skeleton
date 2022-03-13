<script context="module" lang="ts">
	interface Post {
		title: string;
		date: Date;
		body: string;
	}

	export async function load({ params }: import("@sveltejs/kit/types/internal").LoadInput) {
		const post: Post = {
			title: params.slug,
			date: new Date(),
			body: "lorem ipsum"
		};
		return {
			props: {
				post
			}
		};
	}
</script>

<script lang="ts">
	export let post: Post;
</script>

<h3>{post.title}</h3>
<p>
	<em class="text-xs">{post.date}</em>
	<br />
	{post.body}
</p>
