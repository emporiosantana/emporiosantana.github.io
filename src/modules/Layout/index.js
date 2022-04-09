import ArrowUpButton from "../../components/ArrowUpButton";
import Header from "../../components/Header";

import SectionItems from '../SectionItems';
import MenuItems from "../MenuItems";

const Card = ({ children }) => (
  <div className="app">
    <Header 
      srcLogo="./images/logo.jpeg" 
      description="Logo do Empório Santana Bar" 
    />
    <main className="content">
      { children }
    </main>
    <footer>
      <p className='footer'>Empório Santana Bar ©</p>
    </footer>
  </div>
);

const Layout = ({ menuItems, sections, showButtonGoHeader }) => {
  return (
    <Card>
      <MenuItems items={menuItems} />

      <SectionItems sections={sections} />

      <ArrowUpButton 
        visible={showButtonGoHeader} 
        description={'Seta que retorna ao topo da página'} 
        href="#header" 
      />
                
      <h3 className="titulo_produtos">Consulte nossa Equipe</h3>
      <div className="conteudo_produto">
        <p className="descricao_produto">Cervejas Artesanais</p>
        <p className="descricao_produto">Vinhos Nacionais e Importados</p>
      </div>
    </Card>
  )
}

export default Layout