<script>
	import Header from "$lib/Header.svelte";
	import "../app.css";
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
