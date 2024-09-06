import React from 'react';

import * as S from './styles';

import Data from '@assets/data/table.json';

import { 
    TTable 
} from './types';

const Table: React.FC<TTable> = (props) => {
    const handleLastNumbers = (number: number) => {
        props.setLastNumbers([...props.lastNumbers, number]);
    };

    return (
        <S.Container>
            <S.Block className='item-header' onClick={() => handleLastNumbers(0)}>
                <S.Text className='item-header'>0</S.Text>
            </S.Block>
            <S.Block className='item-content'>
                <S.Block className='item-content-numbers'>
                    {[...Data['3RD_COLUMN'], ...Data['2ND_COLUMN'], ...Data['1ST_COLUMN']].map((item, key) => (
                        <S.Block className='item-content-number' key={`item-${key}`} onClick={() => handleLastNumbers(item)}>
                            <S.Text>{item}</S.Text>
                        </S.Block>
                    ))}
                </S.Block>
                <S.Block className='item-content-dozens'>
                    <S.Block onClick={() => alert('1° Duzia')}>
                        <S.Text>1st 12</S.Text>
                    </S.Block>
                    <S.Block onClick={() => alert('2° Duzia')}>
                        <S.Text>2nd 12</S.Text>
                    </S.Block>
                    <S.Block onClick={() => alert('3° Duzia')}>
                        <S.Text>3rd 12</S.Text>
                    </S.Block>
                </S.Block>
                <S.Block className='item-content-others'>
                    <S.Block onClick={() => alert('1-18')}><S.Text>1-18</S.Text></S.Block>
                    <S.Block onClick={() => alert('Even')}><S.Text>Even</S.Text></S.Block>
                    <S.Block onClick={() => alert('Red')}></S.Block>
                    <S.Block onClick={() => alert('Black')}></S.Block>
                    <S.Block onClick={() => alert('Odd')}><S.Text>Odd</S.Text></S.Block>
                    <S.Block onClick={() => alert('19-36')}><S.Text>19-36</S.Text></S.Block>
                </S.Block>
            </S.Block>
            <S.Block className='item-footer'>
                <S.Block className='item-footer-column' onClick={() => alert('1° Coluna')}>
                    <S.Text>2:1</S.Text>
                </S.Block>
                <S.Block className='item-footer-column' onClick={() => alert('2° Coluna')}>
                    <S.Text>2:1</S.Text>
                </S.Block>
                <S.Block className='item-footer-column' onClick={() => alert('3° Coluna')}>
                    <S.Text>2:1</S.Text>
                </S.Block>
            </S.Block>
        </S.Container>
    );
};

export default Table;