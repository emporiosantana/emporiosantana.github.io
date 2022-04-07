//import MeusProdutos from "./meusProdutos";

const Product = ({ nome, descricao, valor }) => {
    return (
                descricao !== ""? (
                    <>
                    <h3 className="nome_produto">{nome}</h3>
                    <div className="conteudo_produto">
                        <p className="descricao_produto">{descricao}</p>
                        <p className="valor_produto">{valor.toFixed(2)}</p>
                    </div> 
                    </>
                ) : ( 
                <div className="conteudo_produto">
                    <h3 className="nome_produto">{nome}</h3>
                    <p className="valor_produto">{valor.toFixed(2)}</p>
                </div>)
    )
}
export default Product;