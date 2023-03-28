<script lang="ts">
	export let direction: string[] | string = ['row'];
	export let as = 'div';
	export let wrap: string[] | string = ['wrap'];
	export let justify: string[] | string = ['flex-start'];
	export let align: string[] | string = ['stretch'];
	export let content: string[] | string = ['stretch'];
	export let height: string[] | string = ['auto'];
	export let width: string[] | string = ['100%'];

	const cssVars = {
		'--flex-direction': typeof direction === 'string' ? direction : direction[0] || 'inherit',
		'--flex-direction-sm': 'var(--flex-direction)',
		'--flex-direction-md': 'var(--flex-direction)',
		'--flex-direction-lg': 'var(--flex-direction)',
		'--flex-direction-xl': 'var(--flex-direction)',
		'--flex-wrap': typeof wrap === 'string' ? wrap : wrap[0] || 'inherit',
		'--flex-wrap-sm': 'var(--flex-wrap)',
		'--flex-wrap-md': 'var(--flex-wrap)',
		'--flex-wrap-lg': 'var(--flex-wrap)',
		'--flex-wrap-xl': 'var(--flex-wrap)',
		'--flex-justify': typeof justify === 'string' ? justify : justify[0] || 'inherit',
		'--flex-justify-sm': 'var(--flex-justify)',
		'--flex-justify-md': 'var(--flex-justify)',
		'--flex-justify-lg': 'var(--flex-justify)',
		'--flex-justify-xl': 'var(--flex-justify)',
		'--flex-align': typeof align === 'string' ? align : align[0] || 'inherit',
		'--flex-align-sm': 'var(--flex-align)',
		'--flex-align-md': 'var(--flex-align)',
		'--flex-align-lg': 'var(--flex-align)',
		'--flex-align-xl': 'var(--flex-align)',
		'--flex-content': typeof content === 'string' ? content : content[0] || 'inherit',
		'--flex-content-sm': 'var(--flex-content)',
		'--flex-content-md': 'var(--flex-content)',
		'--flex-content-lg': 'var(--flex-content)',
		'--flex-content-xl': 'var(--flex-content)',
		'--flex-height': typeof height === 'string' ? height : height[0] || 'inherit',
		'--flex-height-sm': 'var(--flex-height)',
		'--flex-height-md': 'var(--flex-height)',
		'--flex-height-lg': 'var(--flex-height)',
		'--flex-height-xl': 'var(--flex-height)',
		'--flex-width': typeof width === 'string' ? width : width[0] || 'inherit',
		'--flex-width-sm': 'var(--flex-width)',
		'--flex-width-md': 'var(--flex-width)',
		'--flex-width-lg': 'var(--flex-width)',
		'--flex-width-xl': 'var(--flex-width)'
	};

	$: {
		if (typeof direction === 'object') {
			cssVars['--flex-direction'] = direction[0] || 'inherit';
			cssVars['--flex-direction-sm'] = direction[1] || 'var(--flex-direction)';
			cssVars['--flex-direction-md'] = direction[2] || 'var(--flex-direction-sm)';
			cssVars['--flex-direction-lg'] = direction[3] || 'var(--flex-direction-md)';
			cssVars['--flex-direction-xl'] = direction[4] || 'var(--flex-direction-lg)';
		}

		if (typeof wrap === 'object') {
			cssVars['--flex-wrap'] = wrap[0] || 'inherit';
			cssVars['--flex-wrap-sm'] = wrap[1] || 'var(--flex-wrap)';
			cssVars['--flex-wrap-md'] = wrap[2] || 'var(--flex-wrap-sm)';
			cssVars['--flex-wrap-lg'] = wrap[3] || 'var(--flex-wrap-md)';
			cssVars['--flex-wrap-xl'] = wrap[4] || 'var(--flex-wrap-lg)';
		}

		if (typeof justify === 'object') {
			cssVars['--flex-justify'] = justify[0] || 'inherit';
			cssVars['--flex-justify-sm'] = justify[1] || 'var(--flex-justify)';
			cssVars['--flex-justify-md'] = justify[2] || 'var(--flex-justify-sm)';
			cssVars['--flex-justify-lg'] = justify[3] || 'var(--flex-justify-md)';
			cssVars['--flex-justify-xl'] = justify[4] || 'var(--flex-justify-lg)';
		}

		if (typeof align === 'object') {
			cssVars['--flex-align'] = align[0] || 'inherit';
			cssVars['--flex-align-sm'] = align[1] || 'var(--flex-align)';
			cssVars['--flex-align-md'] = align[2] || 'var(--flex-align-sm)';
			cssVars['--flex-align-lg'] = align[3] || 'var(--flex-align-md)';
			cssVars['--flex-align-xl'] = align[4] || 'var(--flex-align-lg)';
		}
	}
</script>

<svelte:element
	this={as}
	{...$$restProps}
	class="flex"
	style:--flex-direction={cssVars['--flex-direction']}
	style:--flex-direction-sm={cssVars['--flex-direction-sm']}
	style:--flex-direction-md={cssVars['--flex-direction-md']}
	style:--flex-direction-lg={cssVars['--flex-direction-lg']}
	style:--flex-direction-xl={cssVars['--flex-direction-xl']}
	style:--flex-wrap={cssVars['--flex-wrap']}
	style:--flex-wrap-sm={cssVars['--flex-wrap-sm']}
	style:--flex-wrap-md={cssVars['--flex-wrap-md']}
	style:--flex-wrap-lg={cssVars['--flex-wrap-lg']}
	style:--flex-wrap-xl={cssVars['--flex-wrap-xl']}
	style:--flex-justify={cssVars['--flex-justify']}
	style:--flex-justify-sm={cssVars['--flex-justify-sm']}
	style:--flex-justify-md={cssVars['--flex-justify-md']}
	style:--flex-justify-lg={cssVars['--flex-justify-lg']}
	style:--flex-justify-xl={cssVars['--flex-justify-xl']}
	style:--flex-align={cssVars['--flex-align']}
	style:--flex-align-sm={cssVars['--flex-align-sm']}
	style:--flex-align-md={cssVars['--flex-align-md']}
	style:--flex-align-lg={cssVars['--flex-align-lg']}
	style:--flex-align-xl={cssVars['--flex-align-xl']}
	style:--flex-content={cssVars['--flex-content']}
	style:--flex-content-sm={cssVars['--flex-content-sm']}
	style:--flex-content-md={cssVars['--flex-content-md']}
	style:--flex-content-lg={cssVars['--flex-content-lg']}
	style:--flex-content-xl={cssVars['--flex-content-xl']}
	style:--flex-height={cssVars['--flex-height']}
	style:--flex-height-sm={cssVars['--flex-height-sm']}
	style:--flex-height-md={cssVars['--flex-height-md']}
	style:--flex-height-lg={cssVars['--flex-height-lg']}
	style:--flex-height-xl={cssVars['--flex-height-xl']}
	style:--flex-width={cssVars['--flex-width']}
	style:--flex-width-sm={cssVars['--flex-width-sm']}
	style:--flex-width-md={cssVars['--flex-width-md']}
	style:--flex-width-lg={cssVars['--flex-width-lg']}
	style:--flex-width-xl={cssVars['--flex-width-xl']}
>
	<slot />
</svelte:element>

<style>
	.flex {
		display: flex;
		flex-direction: var(--flex-direction);
		flex-wrap: var(--flex-wrap);
		justify-content: var(--flex-justify);
		align-items: var(--flex-align);
		align-content: var(--flex-content);
		height: var(--flex-height, auto);
		width: var(--flex-width, auto);
	}

	@media (min-width: 576px) {
		.flex {
			flex-direction: var(--flex-direction-sm);
			flex-wrap: var(--flex-wrap-sm);
			justify-content: var(--flex-justify-sm);
			align-items: var(--flex-align-sm);
			align-content: var(--flex-content-sm);
			height: var(--flex-height-sm);
			width: var(--flex-width-sm);
		}
	}

	@media (min-width: 768px) {
		.flex {
			flex-direction: var(--flex-direction-md);
			flex-wrap: var(--flex-wrap-md);
			justify-content: var(--flex-justify-md);
			align-items: var(--flex-align-md);
			align-content: var(--flex-content-md);
			height: var(--flex-height-md);
			width: var(--flex-width-md);
		}
	}

	@media (min-width: 992px) {
		.flex {
			flex-direction: var(--flex-direction-lg);
			flex-wrap: var(--flex-wrap-lg);
			justify-content: var(--flex-justify-lg);
			align-items: var(--flex-align-lg);
			align-content: var(--flex-content-lg);
			height: var(--flex-height-lg);
			width: var(--flex-width-lg);
		}
	}

	@media (min-width: 1200px) {
		.flex {
			flex-direction: var(--flex-direction-xl);
			flex-wrap: var(--flex-wrap-xl);
			justify-content: var(--flex-justify-xl);
			align-items: var(--flex-align-xl);
			align-content: var(--flex-content-xl);
			height: var(--flex-height-xl);
			width: var(--flex-width-xl);
		}
	}
</style>
