<script lang="ts">
    import { WEEK_COUNT } from '$lib/schedule/Schedule';
    import moment from 'moment';

    export let currentWeek = moment().week() % 4;

    export let selectedWeek: number = currentWeek;

    let width: number = 0;
    $: weekText = width < 515 ? 'Нед.' : 'Неделя';
    $: weekFontSize = width < 515 ? '28px' : '30px';
</script>

<svelte:window bind:innerWidth="{width}" />

<div class="navbar">
    {#each Array(WEEK_COUNT) as _, index}
        <div class="week-select-button">
            <input id="week-{index}" bind:group="{selectedWeek}" value="{index}" type="radio">
            <label for="week-{index}" style:font-size="{weekFontSize}">{weekText} {index + 1} {index === currentWeek ? '*': ''}</label>
        </div>
    {/each}
</div>

<style>
    .navbar {
        display: flex;
        justify-content: center;
        height: 70px;
        background-color: white;
    }

    .week-select-button {
        display: inline-block;
    }

    .week-select-button input {
        display: none;
    }

    .week-select-button label {
        cursor: pointer;
        user-select: none;
        padding: 10px;
        line-height: 70px;
        color: var(--item-not-selected);
    }

    .week-select-button input:checked + label {
        color: var(--item-selected);
        border-bottom: 5px solid var(--item-selected);
    }
</style>
