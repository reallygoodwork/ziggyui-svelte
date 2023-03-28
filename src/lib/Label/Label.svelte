<script lang="ts">
	import { getContext } from 'svelte';

	export let customClass: string = '';
	export let name = getContext<string>('name') || '';
</script>

<label for={name} class="label {customClass}">
	<slot />
</label>

<style>
	:root {
		--label-color: var(--label-color);
		--label-fontSize: var(--label-fontSize);
		--label-fontWeight: var(--label-fontWeight);
		--label-lineHeight: var(--label-lineHeight);
		--label-case: var(--label-case);
	}

	label {
		font-size: var(--label-fontSize);
		font-weight: var(--label-fontWeight);
		font-family: var(--body-fontFamily);
		color: var(--label-color);
		text-transform: var(--label-case);
	}
</style>
