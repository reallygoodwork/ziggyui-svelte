<script lang="ts">
	import { createEventDispatcher, getContext } from 'svelte';

	// Define event dispatcher
	const dispatch = createEventDispatcher();

	const inputId = Math.random().toString(36).substring(2, 9);
	export let value: string = '';

	export let name = '';
	export let hasError: boolean = false;
	export let customClass: string = '';
	export let disabled: boolean = false;

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

<div class="select-wrapper">
	<select
		{name}
		id={inputId}
		{value}
		{disabled}
		on:focus={handleFocus}
		on:blur={handleBlur}
		on:click={handleClick}
		on:change={handleInput}
		class="select {customClass}"
		class:hasError={error}
		aria-invalid={hasError ? 'true' : undefined}
		aria-describedby={hasErrorText ? `${name}-error` : hasHelpText ? `${name}-help` : undefined}
	>
		<slot />
	</select>
	<span class="icon" class:disabled />
</div>

<style>
	:root {
		--select-color: var(--c-body, #007bff);
		--select-bg-color: transparent;
		--select-padding-inline: var(--textFrameY, 12px);
		--select-padding-block: var(--textFrameY, 12px);
		--select-font-size: var(--body-fontSize, 14px);
		--select-border-radius: var(--radius, 4px);
		--select-border-width: var(--fieldBorderWidth, 1px);
		--select-border-color: var(--c-fieldBorder, #007bff);
		--select-caret-color: var(--c-accent, #007bff);
		--select-placeholder-color: var(--c-grey4, #007bff);
		--select-disabled-bg-color: var(--disabled-input-bg-color, #007bff);
		--select-disabled-color: var(--disabled-input-color, #007bff);
		--select-error-border-color: var(--error-input-border-color, #007bff);
		--select-error-color: var(--error-input-color, #007bff);
		--select-iconwidth: var(--select-iconwidth, 1.5rem);
	}

	.select-wrapper {
		position: relative;
	}

	select,
	.select {
		appearance: none;
		display: block;
		width: 100%;
		height: 100%;
		padding-inline: var(--select-padding-inline) var(--select-iconwidth, 1.5rem);
		padding-block: var(--select-padding-block);
		margin: 0;
		font-size: var(--select-font-size);
		border: var(--select-border-width) solid var(--select-border-color);
		background-color: transparent;
		color: var(--select-color);
		outline: none;
		caret-color: var(--select-caret-color);
		border-radius: var(--select-border-radius);
	}

	select:disabled,
	.select:disabled {
		cursor: not-allowed;
		background-color: var(--select-disabled-bg-color);
		color: var(--select-disabled-color);
	}

	select.hasError,
	.select.hasError {
		border-color: var(--select-error-border-color);
		color: var(--select-error-color);
	}

	.icon {
		position: absolute;
		pointer-events: none;
		top: 0;
		inset-inline-end: var(--space-s);
		height: 100%;
		display: block;
		background-color: currentColor;
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-position: center;
		mask-position: center;
		width: var(--select-iconwidth, 1.5rem);
		-webkit-mask-image: var(--select-icon);
		mask-image: var(--select-icon);
	}

	.icon.disabled {
		opacity: 0.3;
	}
</style>
