import React, { FC, useState, useCallback } from 'react';
import Card from './DragCard';
import update from 'immutability-helper';
import styled from 'styled-components';

import { Data } from '../types/models';

const List = styled.div`
  width: 300px;
  padding: 50px;
  background-color: #ccc;
  margin: 50px;
`;

const DragArea: FC = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: 'ID:1',
      },
      {
        id: 2,
        text: 'ID:2',
      },
      {
        id: 3,
        text: 'ID:3',
      },
      {
        id: 4,
        text: 'ID:4',
      },
      {
        id: 5,
        text: 'ID:5',
      },
      {
        id: 6,
        text: 'ID:6',
      },
      {
        id: 7,
        text: 'ID:7',
      },
      {
        id: 8,
        text: 'ID:8',
      },
      {
        id: 9,
        text: 'ID:9',
      },
      {
        id: 10,
        text: 'ID:10',
      },
    ]);

    const moveCard = useCallback(
      (dragIndex: number, hoverIndex: number) => {
        const dragCard = cards[dragIndex];
        setCards(
          update(cards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
            ],
          })
        );
      },
      [cards]
    );

    const renderCard = (card: { id: number; text: string }, index: number) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      );
    };

    return <List>{cards.map((card, i) => renderCard(card, i))}</List>;
  }
};

export default DragArea;
