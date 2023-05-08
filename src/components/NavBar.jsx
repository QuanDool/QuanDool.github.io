export default function NavBar() {
	return (
		<nav className="flex justify-between bg-slate-200 px-6 py-3 sm:px-12 md:px-24 lg:px-36 xl:px-60">
			<a className="cursor-pointer">
				<h3 className="text-2xl font-bold">Quan Pham</h3>
			</a>
			<div className="flex items-center justify-evenly gap-6 font-bold">
				<a
					className="transition-colors duration-300 hover:text-gray-500"
					href=""
				>
					Home
				</a>
				<a
					className="transition-colors duration-300 hover:text-gray-500"
					href=""
				>
					Work
				</a>
				<a
					className="transition-colors duration-300 hover:text-gray-500"
					href=""
				>
					About
				</a>
			</div>
		</nav>
	);
}
