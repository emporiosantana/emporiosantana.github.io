import Section from '../Section';

const SectionList = ({sections}) => {
    return (
        sections.map((section, index) => (<Section id={section.id} name={section.name} products={section.products} key={index}></Section>))
    )
}

export default SectionList;