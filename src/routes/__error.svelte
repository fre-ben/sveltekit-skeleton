<script context="module">
	export function load({ error, status }) {
		return {
			props: { error, status }
		};
	}
</script>

<script>
	export let error;
	export let status;
</script>

<h3>Something happened... 😥</h3>

<h4>{status}</h4>
<h4>{error.message}</h4>
