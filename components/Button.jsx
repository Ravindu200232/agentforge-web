import Link from 'next/link'

const STYLES = {
  solid:
    'bg-brand-600 text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700 hover:shadow-brand-700/30',
  outline:
    'bg-white text-ink-700 ring-1 ring-slate-200 hover:ring-brand-300 hover:text-brand-700',
  ghost:
    'bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/20',
}

const SIZES = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

/** One button shape, used for every call to action on the page. */
export default function Button({
  href, children, variant = 'solid', size = 'md', className = '', ...rest
}) {
  const classes =
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold ' +
    'transition-all duration-200 active:scale-[0.98] ' +
    `${STYLES[variant]} ${SIZES[size]} ${className}`

  const external = href?.startsWith('http')
  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  )
}
