<script lang="ts">
</script>

<div class="sceleton"></div>

<style>
    .sceleton {
        width: 212px;
        height: 444px;
        margin: 5px;
        border-radius: 5px;
        background: linear-gradient(-45deg, var(--skeleton-dark), var(--skeleton-light), var(--skeleton-dark), var(--skeleton-light));
        background-size: 400% 400%;
        -webkit-animation: Gradient 2.25s ease infinite;
        -moz-animation: Gradient 2.25s ease infinite;
        animation: Gradient 2.25s ease infinite;
    }

    @-webkit-keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }

    @-moz-keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }

    @keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }
</style>
