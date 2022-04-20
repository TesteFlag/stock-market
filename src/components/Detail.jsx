import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const params = useParams();
  const [stock, setStock] = useState();

  useEffect( () => {

    fetch("https://justivo.com/stockws.php?get&code=" + params.code)
    .then(response => response.json())
    .then(dataReceived => setStock(dataReceived));

  }, [params]);

  return (
    <>
      {stock && (
        <section>
          <h2>{ stock.name }</h2>
          <h3>{ stock.code }</h3>
          <div>
              Preço: { stock.price }€
          </div>
        </section>
      )}
    </>
  )
}
