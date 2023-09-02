import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout.js'
import IndexPage from './pages/IndexPage.js'
import LoginPage from './pages/LoginPage.js'
import RegisterPage from './pages/RegisterPage.js'
import CreatePage from './pages/CreatePage'
import PostPage from './pages/PostPage'
import EditPage from './pages/EditPage'
import { UserContextProvider } from './UserContext'

function App() {
	return (
		<UserContextProvider>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<IndexPage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<RegisterPage />} />
					<Route path='/create' element={<CreatePage />} />
					<Route path='/edit/:id' element={<EditPage />} />
					<Route path='/post/:id' element={<PostPage />} />
				</Route>
			</Routes>
		</UserContextProvider>
	)
}

export default App
