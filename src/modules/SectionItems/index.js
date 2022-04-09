import Section from '../../components/Section';

const SectionItems = ({sections}) => {
    return (
        sections.map((section, index) => (<Section id={section.id} name={section.name} products={section.products} key={index}></Section>))
    )
}

export default SectionItems;