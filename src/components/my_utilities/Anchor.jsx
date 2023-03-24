export function AnchorSm(props) {
  const { children, bgcolor = 'bg-sky-400', additional } = props
  return (
    <a {...props} className={`inline-block text-white text-xs rounded-full text-center px-4 py-2 ${bgcolor} ${additional}`} target="_blank">
      {children}
    </a>
  )
}

export function AnchorMd(props) {
  const { children, bgcolor = 'bg-sky-400', additional } = props
  return (
    <a {...props} className={`inline-block text-white text-base rounded-full text-center px-6 py-3 ${bgcolor} ${additional}`} target="_blank">
      {children}
    </a>
  )
}

export function AnchorLg(props) {
  const { children, bgcolor = 'bg-sky-400', additional } = props
  return (
    <a {...props} className={`inline-block text-white text-xl rounded-full text-center px-8 py-4 ${bgcolor} ${additional}`} target="_blank">
      {children}
    </a>
  )
}
