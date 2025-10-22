import "./Item.css";

export const Item = ({name, price, descripcion, imageUrl, children}) => {
    return (
        <article className="product-item">
            <img src={imageUrl} alt={descripcion} />
            <h2 className="product-title">{name}</h2>
            <p>Precio: ${price}</p>
            <p>Descripcion{descripcion}</p>
            {children}
        </article>
    );
};