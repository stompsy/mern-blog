import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext'

export default function Header() {
	const { setUserInfo, userInfo } = useContext(UserContext)
	useEffect(() => {
		fetch('http://localhost:4000/profile', {
			credentials: 'include',
		}).then((response) => {
			response.json().then((userInfo) => {
				setUserInfo(userInfo)
			})
		})
	}, [])

	function logout() {
		fetch('http://localhost:4000/logout', {
			credentials: 'include',
			method: 'POST',
		})
		setUserInfo(null)
	}

	const username = userInfo?.username

	return (
		<header>
			<Link to='/' className='logo'>
				StompsyBlog
			</Link>
			<nav>
				{username && (
					<>
						<span className='sm-media-ralign'>Hello, {username}</span>
						<Link className='sm-media-ralign' to={'/create'}>
							Create new post
						</Link>
						<a className='sm-media-ralign' onClick={logout}>
							Logout
						</a>
					</>
				)}
				{!username && (
					<>
						<Link to='/login'>Login</Link>
						<Link to='/register'>Register</Link>
					</>
				)}
			</nav>
		</header>
	)
}
