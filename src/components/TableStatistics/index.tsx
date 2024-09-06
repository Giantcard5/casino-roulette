import React, { useState } from 'react';

import * as S from './styles';

import {
    TTable
} from './types';

import HotCold from './pages/HotCold';
import Advanced from './pages/Advanced';
import LastNumbers from './pages/LastNumbers';

const TableStatistics: React.FC<TTable> = (props) => {
    const [page, setPage] = useState<string>('advanced');
    
    return (
        <S.Container>
            <S.Header>
                <S.Block className='header-navigate'>
                    <S.Text className='header-navigate' onClick={() => setPage('hotcold')}>Hot / Cold</S.Text>
                    <S.Text className='header-navigate' onClick={() => setPage('advanced')}>Advanced</S.Text>
                    <S.Text className='header-navigate' onClick={() => setPage('lastnumbers')}>Last Numbers</S.Text>
                </S.Block>
            </S.Header>
            
            {page === 'advanced' ? 
                <Advanced lastNumbers={props.lastNumbers}/>
                    : page === 'hotcold' ?
                <HotCold lastNumbers={props.lastNumbers}/>
                    :
                <LastNumbers lastNumbers={props.lastNumbers}/>
            }
        </S.Container>
    );
};

export default TableStatistics;