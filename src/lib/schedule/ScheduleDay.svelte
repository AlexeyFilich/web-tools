<script lang="ts">
    import type { ClassData } from './Schedule';

    export let dayOfWeek: string;
    export let classes: ClassData[];
</script>

<div>
    <div class="day">
        <h1>{dayOfWeek}</h1>

        {#each classes as classData}
            <ul class="class">
                <li>{`[${classData.classType}] ${classData.className}`}</li>
                <li>{`${classData.startTime} - ${classData.endTime}`}</li>
                <li>{classData.auditory}</li>
                {#if classData.professor}
                    <li>{`${classData.professor.lastName} ${classData.professor.firstName} ${classData.professor.patronymic}`}</li>
                {:else}
                    <li>No professor</li>
                {/if}
            </ul>
        {/each}
    </div>
</div>

<style>
    .day {
        outline: 3px solid black;
    }

    .class {
        outline: 2px dotted blue;
    }
</style>
