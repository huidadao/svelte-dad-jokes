<script lang="ts">
    import { onMount } from 'svelte'
    import { getRandomJoke, searchJokes } from './api.js'
    import { Col, Container, Row, Button } from 'sveltestrap';
    import Form from './Form.svelte'
    import Joke from './Joke.svelte'

    let randomJoke
    let jokes = []
    let mode = 'waiting'

    onMount(async () => {
        onRandomJoke()
    })

    async function onRandomJoke() {
        try {
            mode = 'random'
            randomJoke = await getRandomJoke()
        } catch(e) {
            console.log(e)
        }
    }

    async function onSearch(event) {
        try {
            mode = 'search'
            jokes = await searchJokes(event.detail)
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

    <Form on:search={onSearch} />

    <Row>
        <Col>
            <Button 
                on:click={onRandomJoke}
                class="randomBtn"
            >Random Joke</Button>
        </Col>
    </Row>

    {#if mode ==='random'}
    <Row>
        <Col>
            <Joke joke={randomJoke} />
        </Col>
    </Row>
    {/if}

    {#if mode === 'search' && jokes.length > 0}
    <Row>
        <Col>
            {#each jokes as joke (joke.id)}
                <Joke joke={joke.joke} />
            {/each}
        </Col>
    </Row>
    {/if}

    {#if mode === 'search' && jokes.length == 0}
    <Row>
        <Col>
            <Joke joke="Jokes on you !!! :) Please try another search." />
        </Col>
    </Row>
    {/if}

</Container>
