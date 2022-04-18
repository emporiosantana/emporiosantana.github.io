import ArrowUpButton from "../../components/ArrowUpButton";
import Header from "../../components/Header";

import SectionItems from '../SectionItems';
import MenuIcons from "../MenuIcons";
import BasicModal from "../../components/Modal";
import WhatsAppButton from "../../components/WhastAppButton";


const Card = ({ children, header }) => (
  <div className="app">
    {header}
    <main className="content">
      {children}
    </main>
    <footer>
      <p className='footer'>Empório Santana Bar ©</p>
    </footer>
  </div>
);

const Layout = ({ menuItems, sections, showButtonGoHeader, header }) => {
  const renderHeader = () => (
    <Header
      srcLogo={header.srcLogo}
      description={header.description}
    />
  );

  return (
    <Card header={renderHeader()}>
      <div className="horario">
        <BasicModal />
      </div>
      <MenuIcons items={menuItems} />

      <SectionItems sections={sections} />

      <ArrowUpButton
        visible={showButtonGoHeader}
        description={'Seta que retorna ao topo da página'}
        href="#header"
      />

      <WhatsAppButton/>

     
      <h3 className="titulo_produtos">Consulte nossa Equipe</h3>
      <div className="conteudo_produto">
        <p className="descricao_produto">Cervejas Artesanais</p>
        <p className="descricao_produto">Vinhos Nacionais e Importados</p>
      </div>
    </Card>
  )
}

export default Layout