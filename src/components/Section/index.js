import Product from "../Product";

const Section = ({ id, name, products }) => {
  return (
    <div id={id} className='sessao_produtos'>
      <h1 className="titulo_produtos">{name}</h1>
      {
        products.map((product, index) => (<Product nome={product.name} descricao={product.description} valor={product.value} key={index + 'product'}></Product>))
      }
    </div>
  )
}

export default Section;
