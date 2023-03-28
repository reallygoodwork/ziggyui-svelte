<script lang="ts">
	import { createEventDispatcher, getContext } from 'svelte';

	// Define event dispatcher
	const dispatch = createEventDispatcher();

	const inputId = Math.random().toString(36).substring(2, 9);
	export let type: string = 'text';
	export let value: string = '';
	export let placeholder: string = '';
	export let name = '';
	export let small: boolean = false;
	export let hasError: boolean = false;
	export let customClass: string = '';
	export let disabled: boolean = false;
	export let required = false;
	export let minLength = null;
	export let maxLength = null;
	export let pattern = null;

	let error = getContext('hasError') || hasError;
	let hasErrorText = getContext('hasErrorText');
	let hasHelpText = getContext('hasHelpText');

	const handleFocus = () => {
		dispatch('on:focus', value);
	};

	const handleBlur = () => {
		dispatch('on:blur', value);
	};

	const handleClick = () => {
		dispatch('on:click', value);
	};

	const handleInput = (event: Event) => {
		value = (event.target as HTMLInputElement).value;
		dispatch('on:input', value);
	};
</script>

<div class="input-wrapper">
	<input
		{type}
		{name}
		id={inputId}
		{value}
		{placeholder}
		{disabled}
		{required}
		minlength={minLength}
		maxlength={maxLength}
		{pattern}
		on:focus={handleFocus}
		on:blur={handleBlur}
		on:click={handleClick}
		on:change={handleInput}
		aria-invalid={hasError ? 'true' : undefined}
		aria-describedby={hasErrorText ? `${name}-error` : hasHelpText ? `${name}-help` : undefined}
		class="input {customClass}"
		class:hasError={error}
		class:small
	/>
</div>

<style>
	:root {
		--input-color: var(--c-body, #007bff);
		--input-bg-color: transparent;
		--input-padding-inline: var(--textFrameY, 12px);
		--input-padding-block: var(--textFrameY, 12px);
		--input-font-size: var(--body-fontSize, 14px);
		--input-border-radius: var(--radius, 4px);
		--input-border-width: var(--fieldBorderWidth, 1px);
		--input-border-color: var(--c-fieldBorder, #007bff);
		--input-focus-border-color: var(--c-accent, #007bff);
		--input-caret-color: var(--c-accent, #007bff);
		--input-placeholder-color: var(--c-grey4, #007bff);
		--input-disabled-bg-color: var(--disabled-input-bg-color, #007bff);
		--input-disabled-color: var(--disabled-input-color, #007bff);
		--input-error-border-color: var(--error-input-border-color, #007bff);
		--input-error-color: var(--error-input-color, #007bff);
	}

	input,
	.input {
		display: block;
		width: 100%;
		height: 100%;
		padding-inline: var(--input-padding-inline);
		padding-block: var(--input-padding-block);
		margin: 0;
		font-size: var(--input-font-size);
		border: var(--input-border-width) solid var(--input-border-color);
		background-color: transparent;
		color: var(--input-color);
		outline: none;
		caret-color: var(--input-caret-color);
		border-radius: var(--input-border-radius);
	}

	input:focus,
	.input:focus {
		border-color: var(--input-focus-border-color);
	}

	input::placeholder,
	.input::placeholder {
		color: var(--input-placeholder-color);
	}

	input:disabled,
	.input:disabled {
		cursor: not-allowed;
		background-color: var(--input-disabled-bg-color);
		color: var(--input-disabled-color);
	}

	input.hasError,
	.input.hasError {
		border-color: var(--input-error-border-color);
		color: var(--input-error-color);
	}
</style>
