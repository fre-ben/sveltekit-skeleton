<script>
	import Header from "$lib/Header.svelte";
</script>

<Header />

<main>
	<slot />
</main>

<footer>Copyright something something</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
