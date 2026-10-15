import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, idx}){
    let oldPrices=["12,495", "11,900", "1,599", "599"];
    let newPrices=["8,999", "9,199", "899", "278"];
    let descriptions=["8,000 DPI", "intuitive surface", "designed for iPad Pro", "wirless"];
        return (
        <div className="Product">
          <h4>{title}</h4>
          <p>{descriptions[idx]}</p>
          <Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]} />
        </div>
    );
}

export {Product};