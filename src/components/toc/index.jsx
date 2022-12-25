import React, { useState, useEffect } from 'react'
import { useHeadsObserver } from './useHeadsObserver'

import './index.scss'

export const Toc = () => {
  const [headings, setHeadings] = useState([]);

  const {activeId} = useHeadsObserver();

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h2, h3, h4"))
      .map((element) => ({
        id: element.id,
        text: element.innerText,
        level: Number(element.nodeName.charAt(1))
      }));
    setHeadings(headingElements);
  }, [])
  
  return (
    <nav className='nav'>
      <ul>
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`head${heading.level}`}
            >
            <a
              href={`#${heading.id}`} 
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(`#${heading.id}`).scrollIntoView({
                  behavior: "smooth"
                })}}
                style={{
                  fontWeight: activeId === heading.id ? "bold" : "normal" 
                }}
              >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
