import { Suspense, lazy } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider } from '@tanstack/react-query'
import { MantineProvider } from '@mantine/core'

import GlobalLoader from '~/layouts/global-loader'
import { queryClient } from './constant'
import AdminLayout from './layouts/admin/admin-layout'

const AboutPage = lazy(() => import('~/pages/front/about'))
const HomePage = lazy(() => import('~/pages/front/home'))
const NotFound = lazy(() => import('~/pages/errors/not-found'))
const Protected = lazy(() => import('~/pages/auth/protected'))
const Login = lazy(() => import('~/pages/auth/login/login'))
const Admin = lazy(() => import('~/pages/dashboard/admin'))
const AdminPage = lazy(() => import('~/pages/dashboard/admin'))
const Table = lazy(() => import('~/pages/dashboard/table/table'))

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Suspense fallback={<GlobalLoader />}>
				<HomePage />
			</Suspense>
		),
	},
	{
		path: 'about',
		element: (
			<Suspense fallback={<GlobalLoader />}>
				<AboutPage />
			</Suspense>
		),
	},
	{
		path: 'login',
		element: (
			<Suspense fallback={<GlobalLoader />}>
				<Login />
			</Suspense>
		),
	},
	{
		path: 'admin',
		element: (
			<Suspense fallback={<GlobalLoader />}>
				<Protected>
					<Admin />
				</Protected>
			</Suspense>
		),
	},
	{
		path: 'admin',
		element: (
			<Protected>
				<AdminLayout />
			</Protected>
		),
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<GlobalLoader />}>
						<Protected>
							<AdminPage />
						</Protected>
					</Suspense>
				),
			},
			{
				path: 'table',
				element: (
					<Suspense fallback={<GlobalLoader />}>
						<Protected>
							<Table />
						</Protected>
					</Suspense>
				),
			},
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
])

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<MantineProvider>
					<RouterProvider router={router} />
				</MantineProvider>
			</QueryClientProvider>
		</>
	)
}

export default App
