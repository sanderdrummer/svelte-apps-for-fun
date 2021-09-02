<script>
	import Nav from '../components/nav.svelte'
</script>
<style>
	:global(body) {
		background: #eee;	
		font-family: sans-serif;
		--primary-color: blue
	}
</style>
	<Nav />
	<slot></slot>