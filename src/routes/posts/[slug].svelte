<script context="module" lang="ts">
	export async function load({ params }: import("@sveltejs/kit/types/internal").LoadInput) {
		try {
			const Post = await import(`../../posts/${params.slug}.md`);

			return {
				props: {
					Post: Post.default
				}
			};
		} catch (e) {
			return {
				status: 404,
				error: "Post not found"
			};
		}
	}
</script>

<script lang="ts">
	export let Post;
</script>

<svelte:component this={Post} />
