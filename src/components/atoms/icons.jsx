import { AiOutlineMenuUnfold } from "react-icons/ai";

function MenuIcon({ size = 24, color = "white", className = "" }) {
  return (
    <AiOutlineMenuUnfold 
      size={size} 
      color={color} 
      className={className} 
      />
  );
}
export { MenuIcon };

// Se puede agregar los iconos que se necesite en todo la web