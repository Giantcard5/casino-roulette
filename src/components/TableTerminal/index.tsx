import React from 'react';

import * as S from './styles';

import Data from '@assets/data/table.json';

import {
    TTable
} from './types';

const TableTerminal: React.FC<TTable> = (props) => {
    return (
        <S.Container>
            {props.lastNumbers.slice(-12).reverse().map((number, index) => (
                <S.Item key={index} className={Data['RED'].includes(number) ? 'item-red' : Data['BLACK'].includes(number) ? 'item-black' : 'item-green'}>
                    <S.Text>{number}</S.Text>
                </S.Item>
            ))}
        </S.Container>
    );
};

export default TableTerminal;