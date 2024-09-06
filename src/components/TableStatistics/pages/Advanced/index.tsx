import React from 'react';

import * as S from './styles';

import Data from '@assets/data/table.json';

const Advanced: React.FC<{ lastNumbers: number[] }> = (props) => {
    const calculatePercentage = (type: string) => {
        switch (type) {
            case 'zero':
                return (props.lastNumbers.filter(number => number === 0).length / props.lastNumbers.length) * 100;
            case '1ST_dozen':
                return (props.lastNumbers.filter(number => Data['1ST_DOZEN'].includes(number)).length / props.lastNumbers.length) * 100;
            case '2ND_dozen':
                return (props.lastNumbers.filter(number => Data['2ND_DOZEN'].includes(number)).length / props.lastNumbers.length) * 100;
            case '3RD_dozen':
                return (props.lastNumbers.filter(number => Data['3RD_DOZEN'].includes(number)).length / props.lastNumbers.length) * 100;
            case '1ST_column':
                return (props.lastNumbers.filter(number => Data['1ST_COLUMN'].includes(number)).length / props.lastNumbers.length) * 100 + ((props.lastNumbers.filter(number => number === 0).length / props.lastNumbers.length) * 100 / 3);
            case '2ND_column':
                return (props.lastNumbers.filter(number => Data['2ND_COLUMN'].includes(number)).length / props.lastNumbers.length) * 100 + ((props.lastNumbers.filter(number => number === 0).length / props.lastNumbers.length) * 100 / 3);
            case '3RD_column':
                return (props.lastNumbers.filter(number => Data['3RD_COLUMN'].includes(number)).length / props.lastNumbers.length) * 100 + ((props.lastNumbers.filter(number => number === 0).length / props.lastNumbers.length) * 100 / 3);
            case '1-18':
                return (props.lastNumbers.filter(number => Data['1_TO_18'].includes(number)).length / props.lastNumbers.length) * 100 + ((props.lastNumbers.filter(number => number === 0).length / props.lastNumbers.length) * 100 / 2);
            case 'Even':
                return (props.lastNumbers.filter(number => Data['EVEN'].includes(number)).length / props.lastNumbers.length) * 100 + ((props.lastNumbers.filter(number => number === 0).length / props.lastNumbers.length) * 100 / 2);
            case 'Red':
                return (props.lastNumbers.filter(number => Data['RED'].includes(number)).length / props.lastNumbers.length) * 100 + ((props.lastNumbers.filter(number => number === 0).length / props.lastNumbers.length) * 100 / 2);
            case 'Black':
                return (props.lastNumbers.filter(number => Data['BLACK'].includes(number)).length / props.lastNumbers.length) * 100 + ((props.lastNumbers.filter(number => number === 0).length / props.lastNumbers.length) * 100 / 2);
            case 'Odd':
                return (props.lastNumbers.filter(number => Data['ODD'].includes(number)).length / props.lastNumbers.length) * 100 + ((props.lastNumbers.filter(number => number === 0).length / props.lastNumbers.length) * 100 / 2);
            case '19-36':
                return (props.lastNumbers.filter(number => Data['19_TO_36'].includes(number)).length / props.lastNumbers.length) * 100 + ((props.lastNumbers.filter(number => number === 0).length / props.lastNumbers.length) * 100 / 2);
        };
    };

    return (
        <S.Content>
            <S.Header>
                <S.Block className='header-items'>
                    {props.lastNumbers.slice(-9).reverse().map((number, index) => (
                        <S.Item className={Data['RED'].includes(number) ? 'item-red' : Data['BLACK'].includes(number) ? 'item-black' : 'item-green'} key={index}>
                            <S.Text className='header-items'>{number}</S.Text>
                        </S.Item>
                    ))}
                </S.Block>
            </S.Header>
            <S.Block className='content-items'>
                <S.Block width={calculatePercentage('zero')} className='content-section-item-green'>
                    <S.Text className='content-section-item'>{calculatePercentage('zero')?.toFixed(0)}%</S.Text>
                    <S.Block className='content-section-subitem-green'>
                        <S.Text className='content-section-subitem'>0</S.Text>
                    </S.Block>
                </S.Block>
                <S.Block width={calculatePercentage('1ST_dozen')} className='content-section-item'>
                    <S.Text className='content-section-item'>{calculatePercentage('1ST_dozen')?.toFixed(0)}%</S.Text>
                    <S.Block className='content-section-subitem'>
                        <S.Text className='content-section-subitem'>1ST Dozen</S.Text>
                    </S.Block>
                </S.Block>
                <S.Block width={calculatePercentage('2ND_dozen')} className='content-section-item'>
                    <S.Text className='content-section-item'>{calculatePercentage('2ND_dozen')?.toFixed(0)}%</S.Text>
                    <S.Block className='content-section-subitem'>
                        <S.Text className='content-section-subitem'>2ND Dozen</S.Text>
                    </S.Block>
                </S.Block>
                <S.Block width={calculatePercentage('3RD_dozen')} className='content-section-item'>
                    <S.Text className='content-section-item'>{calculatePercentage('3RD_dozen')?.toFixed(0)}%</S.Text>
                    <S.Block className='content-section-subitem'>
                        <S.Text className='content-section-subitem'>3RD Dozen</S.Text>
                    </S.Block>
                </S.Block>
            </S.Block>
            <S.Block className='content-items'>
                <S.Block width={calculatePercentage('1ST_column')} className='content-section-item'>
                    <S.Text className='content-section-item'>{calculatePercentage('1ST_column')?.toFixed(0)}%</S.Text>
                    <S.Block className='content-section-subitem'>
                        <S.Text className='content-section-subitem'>1ST Column</S.Text>
                    </S.Block>
                </S.Block>
                <S.Block width={calculatePercentage('2ND_column')} className='content-section-item'>
                    <S.Text className='content-section-item'>{calculatePercentage('2ND_column')?.toFixed(0)}%</S.Text>
                    <S.Block className='content-section-subitem'>
                        <S.Text className='content-section-subitem'>2ND Column</S.Text>
                    </S.Block>
                </S.Block>
                <S.Block width={calculatePercentage('3RD_column')} className='content-section-item'>
                    <S.Text className='content-section-item'>{calculatePercentage('3RD_column')?.toFixed(0)}%</S.Text>
                    <S.Block className='content-section-subitem'>
                        <S.Text className='content-section-subitem'>3RD Column</S.Text>
                    </S.Block>
                </S.Block>
            </S.Block>
            <S.Block className='content-items'>
                <S.Block className='content-section-item-footer'>
                    <S.Text className='content-section-item'>{calculatePercentage('1-18')?.toFixed(0)}%</S.Text>
                    <S.Block width={calculatePercentage('1-18')} className='content-section-subitem-footer'>
                        <S.Text className='content-section-subitem'>1-18</S.Text>
                    </S.Block>
                </S.Block>
                <S.Block className='content-section-item-footer'>
                    <S.Text className='content-section-item'>{calculatePercentage('Even')?.toFixed(0)}%</S.Text>
                    <S.Block width={calculatePercentage('Even')} className='content-section-subitem-footer'>
                        <S.Text className='content-section-subitem'>Even</S.Text>
                    </S.Block>
                </S.Block>
                <S.Block className='content-section-item-footer'>
                    <S.Text className='content-section-item'>{calculatePercentage('Red')?.toFixed(0)}%</S.Text>
                    <S.Block width={calculatePercentage('Red')} className='content-section-subitem-footer'>
                        <S.Text className='content-section-subitem'>RED</S.Text>
                    </S.Block>
                </S.Block>
                <S.Block className='content-section-item-footer'>
                    <S.Text className='content-section-item'>{calculatePercentage('Black')?.toFixed(0)}%</S.Text>
                    <S.Block width={calculatePercentage('Black')} className='content-section-subitem-footer'>
                        <S.Text className='content-section-subitem'>BLACK</S.Text>
                    </S.Block>
                </S.Block>
                <S.Block className='content-section-item-footer'>
                    <S.Text className='content-section-item'>{calculatePercentage('Odd')?.toFixed(0)}%</S.Text>
                    <S.Block width={calculatePercentage('Odd')} className='content-section-subitem-footer'>
                        <S.Text className='content-section-subitem'>ODD</S.Text>
                    </S.Block>
                </S.Block>
                <S.Block className='content-section-item-footer'>
                    <S.Text className='content-section-item'>{calculatePercentage('19-36')?.toFixed(0)}%</S.Text>
                    <S.Block width={calculatePercentage('19-36')} className='content-section-subitem-footer'>
                        <S.Text className='content-section-subitem'>19-36</S.Text>
                    </S.Block>
                </S.Block>
            </S.Block>
        </S.Content>
    );
};

export default Advanced;