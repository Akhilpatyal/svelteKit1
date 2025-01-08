<script lang="ts">
	//  import { goto } from '$app/navigation';
	let text = "";
	export let data;
	console.log(data);
	// $: meal= data?.characters;
	// const search = () => {
	//         // Navigate to the same page with the query parameter
	//         goto(`/?search=${text}`);
	//     };
</script>

<!-- head -->
<svelte:head>
	<title>Food Page</title>
</svelte:head>
<h1>Welcome this is your Food Page!</h1>
<a href="/">home</a>
<a href="/about">About Page</a>
<form method="get">
	<input type="text" name="search" bind:value={text} />
	<button type="submit">Search</button>
</form>
<!-- <button onclick={search}>Search</button> -->
<div class="div">
	<!-- <ol>
	{#each meal as {name,id,about}}
		<li>
		<div>
			<strong>{name}</strong>
			<p>{about}</p>
		</div>
		</li>
	{/each}
</ol> -->
	{#if data.characters && data.characters.length > 0}
		<ul>
			{#each data.characters as { name, image, id }}
				<li>
					<h2>{name}</h2>
					<img src={image} alt={name} width="200" />
				</li>
			{/each}
		</ul>
	{:else}
		<p>No results found</p>
	{/if}
</div>
