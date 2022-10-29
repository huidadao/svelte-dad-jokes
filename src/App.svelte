<script lang="ts">
    import { onMount } from 'svelte'
    import { getRandomJoke } from './api.js'
    import { Col, Container, Row, Button } from 'sveltestrap';
    import Form from './Form.svelte'
    import Joke from './Joke.svelte'

    let randomJoke
    let mode = 'random'

    onMount(async () => {
        onRandomJoke()
    })

    async function onRandomJoke() {
        try {
            randomJoke = await getRandomJoke()
        } catch(e) {
            console.log(e)
        }
    }
</script>

<style>
    :global(.randomBtn) {
        width: 100%;
        margin-bottom: 20px;
        background: rgb(255, 124, 124);
        color: white;
        border: none;
        outline: none;
        cursor: pointer;
    }
    :global(.randomBtn:hover) {
        background: rgb(249, 89, 89);
    }

    @media (max-width: 765px) {
        :global(.randomBtn) {
            margin-top: 20px;
        }
    }
</style>

<Container>
    <Row>
        <Col>
            <h1>Dad Jokes!!! :)</h1>
        </Col>
    </Row>

    <Form />

    <Row>
        <Col>
            <Button 
                on:click={onRandomJoke}
                class="randomBtn"
            >Random Joke</Button>
        </Col>
    </Row>

    <Row>
        <Col>
            <Joke {randomJoke} />
        </Col>
    </Row>

</Container>
