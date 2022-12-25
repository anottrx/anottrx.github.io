import { useEffect, useState, useRef } from 'react'

export function useHeadsObserver() {
  const observer = useRef()
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const handleObsever = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }

    observer.current = new IntersectionObserver(handleObsever, {
      rootMargin: '-20px 0% -40% 0px',
    })

    const headingElements = document.querySelectorAll('h2, h3, h4')
    headingElements.forEach(element => observer.current.observe(element))

    return () => observer.current.disconnect()
  }, [])

  return { activeId }
}
