import React, { useEffect } from 'react'

import './index.scss'

export const TopNav = () => {
	const onScroll = () => {
    const height = document.body.scrollHeight - innerHeight;
    document.querySelector("nav").style.width = (window.pageYOffset / height * 100) + "%";
	};

	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
  
  return (
    <nav className="navbar" />
  )
}
