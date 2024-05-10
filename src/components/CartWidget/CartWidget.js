import { FaCartPlus } from "react-icons/fa";

export const CartWidget = () => {
    return (
        <div style={{ marginTop: '5px' }}> {/* Agregamos un margen superior de 5px */}
            <FaCartPlus color="red" size={30} />
            <span color= "red">10</span>
        </div>
    );
}
