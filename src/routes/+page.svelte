<script lang="ts">
	import Checkbox from '$lib/Checkbox/Checkbox.svelte';
	import Input from '$lib/Input/Input.svelte';
	import Label from '$lib/Label/Label.svelte';
	import Select from '$lib/Select/Select.svelte';
	import { Button, Heading } from '../lib';
	import '../lib/styles.css';
</script>

<Button label="Click me" on:click={() => alert('Hello world!')} ml="xl" />
<Button label="Click me" hasArrow on:click={() => alert('Hello world!')} />
<Button variant="secondary" label="Click me" on:click={() => alert('Hello world!')} />
<Button variant="tertiary" label="Click me" on:click={() => alert('Hello world!')} />
<Button variant="link" label="Click me" on:click={() => alert('Hello world!')} />
<Button small label="Click me" on:click={() => alert('Hello world!')} />
<Button small variant="secondary" label="Click me" on:click={() => alert('Hello world!')} />
<Button small variant="tertiary" label="Click me" on:click={() => alert('Hello world!')} />
<Button small variant="link" label="Click me" on:click={() => alert('Hello world!')} />
<Button disabled label="Click me" on:click={() => alert('Hello world!')} />
<Button disabled variant="secondary" label="Click me" on:click={() => alert('Hello world!')} />
<Button disabled variant="tertiary" label="Click me" on:click={() => alert('Hello world!')} />
<Button disabled small label="Click me" on:click={() => alert('Hello world!')} />
<Button
	disabled
	small
	variant="secondary"
	label="Click me"
	on:click={() => alert('Hello world!')}
/>
<Button disabled small variant="tertiary" label="Click me" on:click={() => alert('Hello world!')} />
<Button disabled small variant="link" label="Click me" on:click={() => alert('Hello world!')} />
<hr />

<Heading level="h1" sizes={['xl', 'l']} text="Heading 1" />
<Heading level="h1" sizes="l" text="Heading 1" />
<Heading level="h1" sizes="xs" align="end" text="Heading 1" />
<hr />
<Input />
<Input placeholder="placeholder test" />
<Input placeholder="placeholder test" value="has text" disabled />
<Input placeholder="placeholder test" value="has text" hasError />
<hr />

<Select value="ok">
	<option value="ok">OK</option>
</Select>

<Select value="ok" disabled>
	<option value="ok">OK</option>
</Select>

<hr />

<Checkbox />
<Checkbox checked disabled />

<hr />

<Label>Label Text</Label>
