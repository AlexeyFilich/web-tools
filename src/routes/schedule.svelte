<script lang="ts">
    import { WEEK_LENGTH } from '$lib/schedule/Schedule';
import ScheduleDay from '$lib/schedule/ScheduleDay.svelte';
    import { loadSchedule } from '$lib/schedule/util/loadSchedule';

    const schedule = loadSchedule();
</script>

<svelte:head>
    <title>Web Tools</title>
</svelte:head>

<h1>Schedule</h1>

{#await schedule}
    <h1>Loading</h1>
{:then result}
    <div class="scheduleGrid" style="grid-template-columns: repeat({WEEK_LENGTH}, 1fr);">
        {#each result as week}
            {#each Object.entries(week) as [day, classes]}
                <ScheduleDay dayOfWeek="{day}" classes="{classes}"></ScheduleDay>
            {/each}
        {/each}
    </div>
{/await}

<style>
    .scheduleGrid {
        display: grid;
    }
</style>
