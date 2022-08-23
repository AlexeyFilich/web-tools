<script lang="ts">
    import type { ClassData } from './Schedule';
    import ScheduleClass from './ScheduleClass.svelte';

    export let dayOfWeek: string;
    export let dayNumber: number;
    export let isOnCurrentWeek: boolean;
    export let classes: ClassData[];
    classes = classes.sort((a, b) => (a.startTime > b.startTime ? 1 : -1));

    $: isToday = isOnCurrentWeek && new Date().getDay() - 1 === dayNumber;

    $: currentClass = (() => {
        if (!isToday) return -1;

        let now = new Date().toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
        });

        let lastIndex = 0;
        for (let i = 0; i < classes.length; i++)
            if (now > classes[i].endTime) lastIndex = i + 1;

        return lastIndex;
    })();

    setTimeout(() => {
        if (isToday) {
            const self = document.getElementById(`day-container-${dayNumber}`);
            self?.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
            });
        }
    }, 1000);
</script>

<div class="day-container" id="day-container-{dayNumber}">
    <div class="header-container">
        <span class="day-text {isToday ? 'day-text-today' : ''}"
            >{dayOfWeek}</span
        >
    </div>
    <!-- width = ScheduleDay/.class-container[width] + 2 * ScheduleDay/.class-container[padding] -->
    <div style="width: 212px" />
    <div class="schedule-container">
        {#if classes.length > 0}
            {#each classes as classData, index}
                <ScheduleClass
                    {index}
                    isCurrent={index === currentClass}
                    {classData}
                />
            {/each}
        {:else}
            <span class="day-text">Нет занятий</span>
        {/if}
    </div>
</div>

<style>
    .day-container {
        display: flex;
        flex-direction: column;
        margin: 5px;
        background-color: white;
        box-shadow: 0px 2px 2px 1px var(--shadow);
        border-radius: 5px;
    }

    .header-container {
        text-align: center;
        padding: 10px;
        border-bottom: 2px solid var(--separator);
    }

    .schedule-container {
        flex: 1 1 auto;
        display: table;
    }

    .day-text {
        font-size: 30px;
        display: table-cell;
        text-align: center;
        vertical-align: middle;
    }

    .day-text-today {
        color: var(--item-selected);
    }
</style>
