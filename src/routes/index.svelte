<script lang="ts">
    let currentDate = new Date();
    let startDate = new Date(currentDate.getFullYear(), 0, 1);
    let week = Math.ceil(((currentDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000)) / 7);

    let weekNo = (week + 1) % 4 + 1;
</script>

<svelte:head>
    <title>Web Tools</title>
</svelte:head>

<h1>{weekNo}</h1>

<style>
</style>
