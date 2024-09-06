import React from 'react';

import * as S from './styles';

import Data from '@assets/data/table.json';

const LastNumbers: React.FC<{ lastNumbers: number[] }> = (props) => {
    return (
        <S.Content>
            {props.lastNumbers.map((number, index) => (
                <S.Item className={Data['RED'].includes(number) ? 'item-red' : Data['BLACK'].includes(number) ? 'item-black' : 'item-green'} key={index}>
                    <S.Text className='header-items'>{number}</S.Text>
                </S.Item>
            )).reverse()}
        </S.Content>
    );
};

export default LastNumbers;