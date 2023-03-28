<script lang="ts">
	export let level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1';
	export let text: string = '';
	export let sizes: string[] | string = 'm';
	export let align: string[] | string = 'start';

	const cssVars = {
		'--heading-size':
			typeof sizes === 'string'
				? `var(--text-${sizes}, var(--text-m))`
				: `var(--text-${sizes[0]}, var(--text-m))` || 'inherit',
		'--heading-size-sm': 'var(--heading-size)',
		'--heading-size-md': 'var(--heading-size)',
		'--heading-size-lg': 'var(--heading-size)',
		'--heading-size-xl': 'var(--heading-size)',
		'--heading-align': typeof align === 'string' ? align : align[0] || 'inherit',
		'--heading-align-sm': 'var(--heading-align)',
		'--heading-align-md': 'var(--heading-align)',
		'--heading-align-lg': 'var(--heading-align)',
		'--heading-align-xl': 'var(--heading-align)'
	};

	$: if (typeof sizes !== 'string' && sizes.length > 1) {
		const base = `var(--text-${[...sizes][0]}, var(--text-m))`;
		const sm = sizes[1] ? `var(--text-${sizes[1]}, var(--text-s))` : 'var(--text-s)';
		const md = sizes[2] ? `var(--text-${sizes[2]}, var(--text-m))` : 'var(--text-m)';
		const lg = sizes[3] ? `var(--text-${sizes[3]}, var(--text-l))` : 'var(--text-l)';
		const xl = sizes[4] ? `var(--text-${sizes[4]}, var(--text-xl))` : 'var(--text-xl)';
		cssVars['--heading-size'] = `var(--text-${[...sizes][0]}, var(--text-m))`;
		cssVars['--heading-size-sm'] = sm || base;
		cssVars['--heading-size-md'] = md || sm || base;
		cssVars['--heading-size-lg'] = lg || md || sm || base;
		cssVars['--heading-size-xl'] = xl || lg || md || sm || base;
	}

	$: if (typeof align !== 'string') {
		const base = align[0];
		const sm = align[1] ?? base;
		const md = align[2] ?? base;
		const lg = align[3] ?? base;
		const xl = align[4] ?? base;
		cssVars['--heading-align'] = base;
		cssVars['--heading-align-sm'] = sm || base;
		cssVars['--heading-align-md'] = md || sm || base;
		cssVars['--heading-align-lg'] = lg || md || sm || base;
		cssVars['--heading-align-xl'] = xl || lg || md || sm || base;
	}
</script>

<svelte:element
	this={level}
	{...$$restProps}
	class="heading"
	style:--heading-size={cssVars['--heading-size']}
	style:--heading-size-sm={cssVars['--heading-size-sm']}
	style:--heading-size-md={cssVars['--heading-size-md']}
	style:--heading-size-lg={cssVars['--heading-size-lg']}
	style:--heading-size-xl={cssVars['--heading-size-xl']}
	style:--heading-align={cssVars['--heading-align']}
	style:--heading-align-sm={cssVars['--heading-align-sm']}
	style:--heading-align-md={cssVars['--heading-align-md']}
	style:--heading-align-lg={cssVars['--heading-align-lg']}
	style:--heading-align-xl={cssVars['--heading-align-xl']}>{text}</svelte:element
>

<style>
	.heading {
		font-size: var(--heading-size);
		text-align: var(--heading-align);
	}

	@media (min-width: 576px) {
		.heading {
			font-size: var(--heading-size-sm);
			text-align: var(--heading-align-sm);
		}
	}

	@media (min-width: 768px) {
		.heading {
			font-size: var(--heading-size-md);
			text-align: var(--heading-align-md);
		}
	}

	@media (min-width: 992px) {
		.heading {
			font-size: var(--heading-size-lg);
			text-align: var(--heading-align-lg);
		}
	}

	@media (min-width: 1200px) {
		.heading {
			font-size: var(--heading-size-xl);
			text-align: var(--heading-align-xl);
		}
	}
</style>
