
import './BurgerMenu.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (

    <nav className="navbar">
      <div className="burger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? 'rotate1' : ''}`}></div>
        <div className={`line ${isOpen ? 'hide' : ''}`}></div>
        <div className={`line ${isOpen ? 'rotate2' : ''}`}></div>
      </div>
      
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
      <a href="#About"><li className="font-bold">A propos</li></a>
	<a href="#Competences"><li className="font-bold">Compétences</li></a>
			<a href="#Work"><li className="font-bold">Projets</li></a>
			<a href="#Footer"><li className="font-bold">Contact</li></a>
      </ul>
    </nav>
  );
};

export default BurgerMenu;