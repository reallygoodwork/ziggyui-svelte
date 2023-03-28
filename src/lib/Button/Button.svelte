<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import type { SpacingSize } from '../utils/Spacing';
	import { getSpacing } from '../utils/Spacing';
	// Define event dispatcher
	const dispatch = createEventDispatcher();

	// Define properties
	export let label: string = 'Button';
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let disabled: boolean = false;
	export let small = false;
	export let variant: 'primary' | 'secondary' | 'tertiary' | 'link' = 'primary';
	export let customClass: string = '';
	export let hasArrow = false;
	export let mt: SpacingSize | SpacingSize[] = 'none';
	export let mb: SpacingSize | SpacingSize[] = 'none';
	export let ml: SpacingSize | SpacingSize[] = 'none';
	export let mr: SpacingSize | SpacingSize[] = 'none';

	$: spacing = getSpacing({
		blockStart: mt,
		blockEnd: mb,
		inlineStart: ml,
		inlineEnd: mr
	});

	function handleClick() {
		dispatch('click');
	}
</script>

<button
	class="button {customClass} {variant}"
	style=" {spacing}"
	class:hasArrow
	class:small
	{disabled}
	{type}
	on:click={handleClick}
>
	{label}
	{#if hasArrow}
		<span aria-hidden="true">→</span>
	{/if}
</button>

<style>
	:root {
		--button-color: var(--c-accentContrasted, #007bff);
		--button-bg-color: var(--c-accent, #ffffff);
		--button-padding-inline: var(--textFrameX, 24px);
		--button-padding-block: var(--textFrameY, 12px);
		--button-font-size: var(--text-s, 14px);
		--button-border-radius: var(--radius, 4px);
		--button-border-width: var(--fieldBorderWidth, 1px);
		--button-border-color: var(--c-accentContrasted, #007bff);
	}

	.hasArrow,
	.link.hasArrow {
		text-decoration: none;
	}

	.button {
		display: inline-block;
		background-color: var(--button-bg-color);
		color: var(--button-color);
		font-size: var(--button-font-size);
		padding-block: var(--button-padding-block);
		padding-inline: var(--button-padding-inline);
		border: var(--button-border-width) solid var(--button-border-color);
		border-radius: var(--button-border-radius);
		cursor: pointer;
		text-align: center;
		text-decoration: none;
		font-weight: 500;
		transition: all var(--hover-transition, 0.2s ease-in-out);
		margin-inline-start: var(--inlineStart, initial);
		margin-inline-end: var(--inlineEnd, initial);
		margin-block-start: var(--blockStart, initial);
		margin-block-end: var(--blockEnd, initial);
	}

	@media (min-width: 576px) {
		.button {
			margin-inline-start: var(--inlineStart-sm, initial);
			margin-inline-end: var(--inlineEnd-sm, initial);
			margin-block-start: var(--blockStart-sm, initial);
			margin-block-end: var(--blockEnd-sm, initial);
		}
	}

	@media (min-width: 768px) {
		.button {
			margin-inline-start: var(--inlineStart-md, initial);
			margin-inline-end: var(--inlineEnd-md, initial);
			margin-block-start: var(--blockStart-md, initial);
			margin-block-end: var(--blockEnd-md, initial);
		}
	}

	@media (min-width: 992px) {
		.button {
			margin-inline-start: var(--inlineStart-lg, initial);
			margin-inline-end: var(--inlineEnd-lg, initial);
			margin-block-start: var(--blockStart-lg, initial);
			margin-block-end: var(--blockEnd-lg, initial);
		}
	}

	@media (min-width: 1200px) {
		.button {
			margin-inline-start: var(--inlineStart-xl, initial);
			margin-inline-end: var(--inlineEnd-xl, initial);
			margin-block-start: var(--blockStart-xl, initial);
			margin-block-end: var(--blockEnd-xl, initial);
		}
	}

	.button:hover {
		filter: brightness(1.1);
	}

	.primary {
		background-color: var(--button-bg-color);
		color: var(--button-color);
		border-color: var(--button-bg-color);
	}

	.secondary {
		--button-color: var(--c-grey8, #007bff);
		--button-bg-color: var(--c-grey2, #ffffff);
		--button-border-color: var(--c-grey2, #007bff);
	}

	.tertiary {
		--button-color: var(--c-accent, #007bff);
		--button-bg-color: transparent;
		--button-border-color: var(--c-accent, #007bff);
	}

	.tertiary:hover {
		--button-bg-color: var(--c-grey2, #007bff);
	}

	.tertiary:hover:disabled {
		--button-bg-color: transparent;
	}

	.link {
		--button-color: var(--c-accent, #007bff);
		--button-bg-color: transparent;
		--button-border-color: transparent;
		text-decoration: underline;
		--button-padding-inline: 0;
	}

	.link:hover {
		text-decoration: none;
	}

	.link:hover:disabled {
		text-decoration: underline;
	}

	.small {
		--button-padding-inline: var(--textFrameY, 12px);
		--button-padding-block: var(--textFrameY, 6px);
		--button-font-size: var(--text-xs, 12px);
	}

	button:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	button:disabled:hover {
		filter: none;
	}
</style>
