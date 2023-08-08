import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout.js'
import IndexPage from './pages/IndexPage.js'
import LoginPage from './pages/LoginPage.js'
import RegisterPage from './pages/RegisterPage.js'

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<IndexPage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<RegisterPage />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
