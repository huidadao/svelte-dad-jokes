<script>
    import { Card } from 'sveltestrap';
    export let joke
</script>

<style>
    :global(.card) {
        margin-bottom: 10px;
    }
</style>

<Card class="card" body>{joke}</Card>
