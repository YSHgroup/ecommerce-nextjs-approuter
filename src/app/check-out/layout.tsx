/** @format */

const Layout = ({
	children,
	order,
}: {
	children: React.ReactNode
	order: React.ReactNode
}) => {
	return (
		<>
			{children}
			{order}
		</>
	)
}

export default Layout
