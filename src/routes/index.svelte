<script lang="ts">
	let pageTitle: string = "Svelte";

	$: if (pageTitle.length === 0) {
		pageTitle = "Emptiness";
	}
</script>

<h1 class="test">Welcome to <strong>{pageTitle}</strong></h1>
<label>
	Change me:
	<input type="text" bind:value={pageTitle} />
</label>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<style>
	h1 {
		color: rebeccapurple;
	}

	h1 > strong {
		color: rgb(255, 131, 30);
	}
</style>
