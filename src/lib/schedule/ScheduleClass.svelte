<script lang="ts">
    import { MAX_CLASSES_PER_DAY, type ClassData } from './Schedule';

    enum HeaderColor {
        'ЛК' = '#87E3F5',
        'ПЗ' = '#0B68E0',
        'ЛР' = '#9000DE'
    };

    export let index: number;
    export let isCurrent: boolean;
    export let classData: ClassData;

    const headerColor = HeaderColor[classData.classType];
</script>

<div class="class-container">
    <div class="row-container">
        <span class="sub-text">{classData.startTime} - {classData.endTime}</span>
        <span class="sub-text auditory-text">{classData.auditory}</span>
    </div>
    <div class="row-container">
        <span class="primary-text circle" style:color={headerColor}>•</span>
        <span class="primary-text {isCurrent ? 'primary-text-current' : ''}">{classData.className} ({classData.classType})</span>
    </div>
    <div class="row-container">
        {#if classData.professor}
            <span class="sub-text">{classData.professor.lastName} {classData.professor.firstName[0]}. {classData.professor.patronymic[0]}.</span>
        {:else}
            <span class="sub-text">Нет преподавателя</span>
        {/if}
    </div>
    {#if index + 1 != MAX_CLASSES_PER_DAY}
        <div class="border"></div>
    {/if}
</div>

<style>
    .class-container {
        display: flex;
        flex-direction: column;
        width: 200px;
        padding: 6px;
    }

    .border {
        border-bottom: 1px solid var(--separator);
        padding-top: 9px;
    }

    .row-container {
        width: inherit;
    }

    .primary-text {
        font-size: 24px;
        font-weight: bold;
    }

    .primary-text-current {
        color: var(--item-selected);
    }

    .sub-text {
        font-size: 20px;
    }

    .auditory-text {
        float: right;
    }

    .circle {
        font-family: 'Times New Roman';
    }
</style>
