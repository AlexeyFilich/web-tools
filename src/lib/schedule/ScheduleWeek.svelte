<script lang="ts">
    import ScheduleDaySkeleton from '$lib/schedule/ScheduleDaySkeleton.svelte';
    import type { Schedule } from './Schedule';
    import ScheduleDay from './ScheduleDay.svelte';

    export let selectedWeek: number;
    export let isOnCurrentWeek: boolean;
    export let schedule: Promise<Schedule>;
</script>

<div class="schedule-container">
    {#await schedule}
        <ScheduleDaySkeleton />
    {:then schedule}
        {#each Object.entries(schedule[selectedWeek]) as [day, classes], index}
            <ScheduleDay dayOfWeek="{day}" dayNumber="{index}" isOnCurrentWeek="{isOnCurrentWeek}" classes="{classes}"></ScheduleDay>
        {/each}
    {/await}
</div>

<style>
    .schedule-container {
        padding-left: 10px;
        padding-right: 10px;
        display: flex;
        flex-direction: row;
        overflow-x: auto;
    }

    ::-webkit-scrollbar {
       height: 10px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: var(--separator);
    }

    ::-webkit-scrollbar-thumb:hover {
        background: var(--shadow);
    }
</style>
