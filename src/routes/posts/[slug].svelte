<script context="module" lang="ts">
	interface Post {
		title: string;
		date: Date;
		body: string;
	}

	export async function load({ params }: import("@sveltejs/kit/types/internal").LoadInput) {
		const MarkdownFile = await import(`../../posts/${params.slug}.md`);

		return {
			props: {
				MarkdownFile: MarkdownFile.default,
				title: MarkdownFile.metadata.title
			}
		};
	}
</script>

<script lang="ts">
	export let MarkdownFile;
	export let title: string;
</script>

<h1>title is {title}</h1>
<MarkdownFile />
