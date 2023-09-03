import React from 'react'
import Container from './ui/container'
import Link from 'next/link'
import MainNav from './mainNav'
import { getCategories } from '@/actions/get-categories'
import NavbarActions from './navbarActions'

export const revalidate = 0;

export default async function NavBar() {
	const categories = await getCategories()
	return (
		<div className='border-b'>
			<Container>
				<div className='reletave px-4 sm:px-6 flex h-16 items-center'>
					<Link href="/" className='ml-4 flex lg:ml-0 gap-x-2'>
						<p className='font-bold text-xl'>STORE</p>
					</Link>
					<MainNav data={categories} />
					<NavbarActions />
				</div>
			</Container>
		</div>
	)
}
