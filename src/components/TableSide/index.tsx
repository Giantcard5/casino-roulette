import React from 'react';

import * as S from './styles';

import Data from '@assets/data/table.json';

import {
    TTable
} from './types';

const TableSide: React.FC<TTable> = (props) => {
    const checkLastNumbers = (
        props: { 
            lastNumbers: number[] 
        }, 
        Data: { 
            '5_SIDE': number[], 
            '0_SIDE': number[] 
        }
    ): { 
        groupNumbers: number[], 
        groupSide: string 
    } => {
        const { lastNumbers } = props;
        const { 
            '5_SIDE': FIVE_SIDE, 
            '0_SIDE': ZERO_SIDE 
        } = Data;

        let lastNumber = lastNumbers[lastNumbers.length - 1];
        let currentGroup: '5_SIDE' | '0_SIDE' | null = null;

        if (FIVE_SIDE.includes(lastNumber)) {
            currentGroup = '5_SIDE';
        } else if (ZERO_SIDE.includes(lastNumber)) {
            currentGroup = '0_SIDE';
        }

        if (currentGroup === null) return { groupNumbers: [], groupSide: 'Nenhum' };

        let groupNumbers: number[] = [lastNumber];
        let groupSide: string = currentGroup === '5_SIDE' ? '5_SIDE' : '0_SIDE';

        for (let i = lastNumbers.length - 2; i >= 0; i--) {
            let currentNumber = lastNumbers[i];
            let belongsToCurrentGroup =
                (currentGroup === '5_SIDE' && FIVE_SIDE.includes(currentNumber)) ||
                (currentGroup === '0_SIDE' && ZERO_SIDE.includes(currentNumber));

            if (!belongsToCurrentGroup) {
                break;
            }

            groupNumbers.push(currentNumber);
        }

        return { groupNumbers, groupSide };
    };

    let Properties = { 
        lastNumbers: props.lastNumbers 
    };
    let Datas = {
        '5_SIDE': Data['5_SIDE'],
        '0_SIDE': Data['0_SIDE']
    };

    let result = checkLastNumbers(Properties, Datas);

    return (
        <S.Container>
            <S.Text className='item-title'>{result.groupSide === '5_SIDE' ? 'Ultimo lado: 5: ' : 'Ultimo lado: 0'}</S.Text>

            <S.Block>
                {result.groupNumbers.map((item, index) => (
                    <S.Item key={index} className={Data['RED'].includes(item) ? 'item-red' : Data['BLACK'].includes(item) ? 'item-black' : 'item-green'}>
                        <S.Text className='item'>{item}</S.Text>
                    </S.Item>
                ))}
            </S.Block>
        </S.Container>
    );
};

export default TableSide;