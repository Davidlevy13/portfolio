import BurgerMenu from "./main/BurgerMenu";
export const Header = () => {
	return (
		<div className="flex justify-between sticky top-0 bg-white ">
				<section>
			<BurgerMenu/>
			</section>
			<section>
			<img src="./src/assets/logo.png" alt="logo" className="w-40 relative pr-4 pt-4 lg:w-40" /></section>

			
			
		</div>
	);
};