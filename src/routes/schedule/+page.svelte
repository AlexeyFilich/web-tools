<script lang="ts">
    import ScheduleHeader from '$lib/schedule/ScheduleHeader.svelte';
    import ScheduleNavbar from '$lib/schedule/ScheduleNavbar.svelte';
    import ScheduleWeek from '$lib/schedule/ScheduleWeek.svelte';
    import { loadSchedule } from '$lib/schedule/util/loadSchedule';

    import './schedule.css';

    let currentWeek: number;
    let selectedWeek: number;
    const schedule = loadSchedule();

    $: isOnCurrentWeek = currentWeek === selectedWeek;
</script>

<svelte:head>
    <title>Schedule</title>
</svelte:head>

<ScheduleHeader />

<ScheduleNavbar bind:currentWeek bind:selectedWeek />

<ScheduleWeek {selectedWeek} {isOnCurrentWeek} {schedule} />

<style>
</style>
