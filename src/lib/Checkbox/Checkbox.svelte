<script lang="ts">
	import { createEventDispatcher, getContext } from 'svelte';

	const dispatch = createEventDispatcher();

	export let checked = true;
	export let disabled: boolean = false;
	export let name = '';
	export let hasError = false;
	export let customClass: string = '';

	const inputId = Math.random().toString(36).substring(2, 9);
	let error = !!getContext('hasError') || hasError;
	let hasErrorText = getContext('hasErrorText');
	let hasHelpText = getContext('hasHelpText');

	const handleFocus = () => {
		dispatch('on:focus', checked);
	};

	const handleBlur = () => {
		dispatch('on:blur', checked);
	};

	const handleClick = () => {
		dispatch('on:click', checked);
	};

	const handleChange = (event: Event) => {
		checked = (event.target as HTMLInputElement).checked;
		dispatch('on:change', checked);
	};
</script>

<input
	type="checkbox"
	{checked}
	{disabled}
	{name}
	id={inputId}
	on:focus={handleFocus}
	on:blur={handleBlur}
	on:click={handleClick}
	on:change={handleChange}
	class="checkbox {customClass}"
	class:hasError={error}
	aria-invalid={hasError ? 'true' : undefined}
	aria-describedby={hasErrorText ? `${name}-error` : hasHelpText ? `${name}-help` : undefined}
/>

<style>
	:root {
		--checkbox-color: var(--c-accent, #007bff);
		--checkbox-bg-color: transparent;
		--checkbox-padding-inline: var(--textFrameY, 12px);
		--checkbox-padding-block: var(--textFrameY, 12px);
		--checkbox-font-size: var(--body-fontSize, 14px);
		--checkbox-border-radius: var(--radius, 4px);
		--checkbox-border-width: var(--fieldBorderWidth, 1px);
		--checkbox-border-color: var(--c-fieldBorder, #007bff);
		--checkbox-caret-color: var(--c-accent, #007bff);
		--checkbox-placeholder-color: var(--c-grey4, #007bff);
		--checkbox-disabled-bg-color: var(--disabled-input-bg-color, #007bff);
		--checkbox-disabled-color: var(--disabled-input-color, #007bff);
		--checkbox-error-border-color: var(--error-input-border-color, #007bff);
		--checkbox-error-color: var(--error-input-color, #007bff);
	}

	input[type='checkbox'],
	.checkbox {
		appearance: none;
		display: inline-block;
		vertical-align: middle;
		border-radius: var(--checkbox-border-radius);
		background: var(--checkbox-bg-color);
		border: var(--checkbox-border-width) solid var(--checkbox-border-color);
		font-size: var(--checkbox-font-size);
		color: var(--checkbox-color);
		padding: 0;
		user-select: none;
		width: var(--checkbox-size);
		height: var(--checkbox-size);
		/* outline: transparent 1px auto; */
	}

	input[type='checkbox']:checked,
	.checkbox:checked {
		border: var(--checkbox-border-width) solid var(--checkbox-color);
		background-color: var(--checkbox-color);
		background-size: 140% 140%;
		background-position: center;
		background-repeat: no-repeat;
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Im0xMC41ODYgMTMuNDE0bC0yLjgyOS0yLjgyOEw2LjM0MyAxMmw0LjI0MyA0LjI0M2w3LjA3LTcuMDcxbC0xLjQxMy0xLjQxNWwtNS42NTcgNS42NTdaIi8+PC9zdmc+);
	}

	input[type='checkbox']:checked:disabled,
	.checkbox:checked:disabled {
		opacity: 0.5;
		background-color: var(--checkbox-color);
		border: var(--checkbox-border-width) solid var(--checkbox-color);
		background-size: 140% 140%;
		background-position: center;
		background-repeat: no-repeat;
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Im0xMC41ODYgMTMuNDE0bC0yLjgyOS0yLjgyOEw2LjM0MyAxMmw0LjI0MyA0LjI0M2w3LjA3LTcuMDcxbC0xLjQxMy0xLjQxNWwtNS42NTcgNS42NTdaIi8+PC9zdmc+);
	}

	input[type='checkbox']:checked:focus,
	.checkbox:checked:focus {
		outline: var(--sf-global-body-color) 1px auto;
		border: var(--checkbox-border-width) solid var(--checkbox-color);
	}

	input[type='checkbox']:focus,
	.checkbox:focus {
		outline: var(--sf-global-input-focusoutline) 1px auto;
		border: var(--checkbox-border-width) solid var(--checkbox-border-color);
		outline-offset: 2px;
	}

	input[type='checkbox']:disabled,
	.checkbox:disabled {
		background: var(--input-disabled-bg-color);
		color: var(--input-disabled-color);
		border: var(--checkbox-border-width) solid var(--checkbox-border-color);
	}

	.hasError {
		outline: var(--sf-global-input-error) 1px auto;
		border: 1px solid var(--sf-global-input-error);
		color: var(--sf-global-input-error);
		outline: transparent 1px auto;
	}

	.hasError:focus,
	.hasError:focus:checked {
		outline: var(--sf-global-input-error) 1px auto;
		border: 1px solid var(--sf-global-input-error);
	}
</style>
