import React, { FC } from 'react';
import { Card } from './Card';
import { Monster } from '../../@types/rolodex.types';
import './index.styles.scss'

type Props = {
  monsters: Monster[];
};


const CardList: FC<Props> = ({monsters}: Props) => {
return (
    <div className='card-list'>
		{monsters.map((monster) => (
			<Card key={monster.id} monster={monster} />
    ))}
    </div>
  );
};

export { CardList };
