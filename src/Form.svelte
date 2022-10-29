<script lang="ts">
    import { Form, FormGroup, FormText, Input, Label, Col, Container, Row, Button } from 'sveltestrap';
</script>

<style>
    :global(.search) {
        bottom: 0;
        right: 0;
        left: 0;
        margin-top: 30px;
        width: 100%;
        background: rgb(99, 165, 250);
        border: none;
    }
    :global(.search:hover) {
        background: rgb(66, 145, 249);
    }

    @media (max-width:765px) {
        :global(.search) {
            margin-top: 0;
        }
    }
</style>

<Form>
    <Row>
        <Col md="8" xs="12">
            <FormGroup>
                <Label for="dadJokeSearch">Search</Label>
                <Input 
                    type="text" 
                    id="dadJokesSearch" 
                    placeholder="Search For Your Favorite Dad Jokes" 
                />
            </FormGroup>
        </Col>
        <Col md="4" xs="12">
            <Button class="search">Search</Button>
        </Col>
    </Row>
</Form>