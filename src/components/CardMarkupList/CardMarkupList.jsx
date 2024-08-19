import { DivWrapper } from "./CardMarkupList.styled";

export const CardMarkupList = ({ dataCard, ItemComponent, gapClass, title }) => {
  return (
    <DivWrapper>
      {title && <h2 className="title">{title}</h2>}
      <ul className={`card-list ${gapClass}`}>
        {dataCard && dataCard.map(item => (
          <ItemComponent key={item.id} cardData={item} />
        ))}
      </ul>
    </DivWrapper>
  );
};
