export type SpacingSize = 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl' | 'none';

interface SpacingProps {
  blockStart?: SpacingSize | SpacingSize[];
  blockEnd?: SpacingSize | SpacingSize[];
  inlineStart?: SpacingSize | SpacingSize[];
  inlineEnd?: SpacingSize | SpacingSize[];
}

export function getSpacing(size: SpacingProps): string {
  const { blockStart, blockEnd, inlineStart, inlineEnd } = size;

  if (
		(!blockStart && !blockEnd && !inlineStart && !inlineEnd) ||
		(blockStart === 'none' && blockEnd === 'none' && inlineStart === 'none' && inlineEnd === 'none')
	) {
		return '';
	}

  const cssVars = {
		'--blockStart':
			typeof blockStart === 'string'
				? `var(--space-${blockStart})`
				: `var(--space-${blockStart[0]})` || 0,
		'--blockStart-sm': 'var(--blockStart)',
		'--blockStart-md': 'var(--blockStart)',
		'--blockStart-lg': 'var(--blockStart)',
		'--blockStart-xl': 'var(--blockStart)',
		'--blockEnd':
			typeof blockEnd === 'string'
				? `var(--space-${blockEnd})`
				: `var(--space-${blockEnd[0]})` || 0,
		'--blockEnd-sm': 'var(--blockEnd)',
		'--blockEnd-md': 'var(--blockEnd)',
		'--blockEnd-lg': 'var(--blockEnd)',
		'--blockEnd-xl': 'var(--blockEnd)',
		'--inlineStart':
			typeof inlineStart === 'string'
				? `var(--space-${inlineStart})`
				: `var(--space-${inlineStart[0]})` || 0,
		'--inlineStart-sm': 'var(--inlineStart)',
		'--inlineStart-md': 'var(--inlineStart)',
		'--inlineStart-lg': 'var(--inlineStart)',
		'--inlineStart-xl': 'var(--inlineStart)',
		'--inlineEnd':
			typeof inlineEnd === 'string'
				? `var(--space-${inlineEnd})`
				: `var(--space-${inlineEnd[0]})` || 0,
		'--inlineEnd-sm': 'var(--inlineEnd)',
		'--inlineEnd-md': 'var(--inlineEnd)',
		'--inlineEnd-lg': 'var(--inlineEnd)',
		'--inlineEnd-xl': 'var(--inlineEnd)'
	};

  if (Array.isArray(blockStart)) {
    cssVars['--blockStart-sm'] = `var(--space-${blockStart[1]})` || 'var(--blockStart)';
    cssVars['--blockStart-md'] = `var(--space-${blockStart[2]})` || 'var(--blockStart-sm)';
    cssVars['--blockStart-lg'] = `var(--space-${blockStart[3]})` || 'var(--blockStart-md)';
    cssVars['--blockStart-xl'] = `var(--space-${blockStart[4]})` || 'var(--blockStart-lg)';
  }

  if (Array.isArray(blockEnd)) {
    cssVars['--blockEnd-sm'] = `var(--space-${blockEnd[1]})` || 'var(--blockEnd)';
    cssVars['--blockEnd-md'] = `var(--space-${blockEnd[2]})` || 'var(--blockEnd-sm)';
    cssVars['--blockEnd-lg'] = `var(--space-${blockEnd[3]})` || 'var(--blockEnd-md)';
    cssVars['--blockEnd-xl'] = `var(--space-${blockEnd[4]})` || 'var(--blockEnd-lg)';
  }

  if (Array.isArray(inlineStart)) {
    cssVars['--inlineStart-sm'] = `var(--space-${inlineStart[1]})` || 'var(--inlineStart)';
    cssVars['--inlineStart-md'] = `var(--space-${inlineStart[2]})` || 'var(--inlineStart-sm)';
    cssVars['--inlineStart-lg'] = `var(--space-${inlineStart[3]})` || 'var(--inlineStart-md)';
    cssVars['--inlineStart-xl'] = `var(--space-${inlineStart[4]})` || 'var(--inlineStart-lg)';
  }

  if (Array.isArray(inlineEnd)) {
    cssVars['--inlineEnd-sm'] = `var(--space-${inlineEnd[1]})` || 'var(--inlineEnd)';
    cssVars['--inlineEnd-md'] = `var(--space-${inlineEnd[2]})` || 'var(--inlineEnd-sm)';
    cssVars['--inlineEnd-lg'] = `var(--space-${inlineEnd[3]})` || 'var(--inlineEnd-md)';
    cssVars['--inlineEnd-xl'] = `var(--space-${inlineEnd[4]})` || 'var(--inlineEnd-lg)';
  }

  return Object.entries(cssVars).map(([key, value]) => `${key}: ${value};`).join(' ');
}