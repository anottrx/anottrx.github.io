import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { GitHubIcon } from '../social-share/github-icon'

import './index.scss'

export const Top = ({ title, location, rootPath }) => {
  const isRoot = location.pathname === rootPath;

	const onScroll = () => {
    const height = document.body.scrollHeight - innerHeight;
    document.querySelector("nav").style.width = (window.pageYOffset / height * 100) + "%";
	};

	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

  
  return (
    <div className="top">
      <nav className="navbar" />
      {!isRoot && (
        <Link to={`/`} className="link">
          {title}
        </Link>
      )}
      <GitHubIcon />
    </div>
  )
}
