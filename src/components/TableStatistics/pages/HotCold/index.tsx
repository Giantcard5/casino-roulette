import React from 'react';

import * as S from './styles';

import Data from '@assets/data/table.json';

import { 
    FaFireAlt 
} from 'react-icons/fa';
import { 
    FaRegSnowflake
} from 'react-icons/fa';

const HotCold: React.FC<{ lastNumbers: number[] }> = (props) => {
    const getHotNumbers = (numbers: number[]): number[] => {
        let frequency: { [key: number]: number } = {};

        numbers.forEach(num => {
            frequency[num] = (frequency[num] || 0) + 1;
        });
    
        let frequencyArray = Object.entries(frequency);
    
        let sortedByMost = [...frequencyArray].sort((a, b) => b[1] - a[1]);
        let hotNumbers = sortedByMost.slice(0, 5).map(item => Number(item[0]));
    
        return hotNumbers;
    };
    const getColdNumbers = (numbers: number[]): number[] => {
        let frequency: { [key: number]: number } = {};

        numbers.forEach(num => {
          frequency[num] = (frequency[num] || 0) + 1;
        });
      
        let frequencyArray = Object.entries(frequency);
      
        let sortedByLeast = [...frequencyArray].sort((a, b) => a[1] - b[1]);
        let coldNumbers = sortedByLeast.slice(0, 5).map(item => Number(item[0]));
        
        return coldNumbers;
    };

    return (
        <S.Container>
            <S.Header>
                <S.Block className='header-items'>
                    {props.lastNumbers.slice(-9).reverse().map((number, index) => (
                        <S.Item className={Data['RED'].includes(number) ? 'item-red' : Data['BLACK'].includes(number) ? 'item-black' : 'item-green'} key={index}>
                            <S.Text className='header-items'>{number}</S.Text>
                        </S.Item>
                    ))}
                </S.Block>
            </S.Header>
            <S.Content>
                <S.Block className='content-side'>
                    <S.Block className='content-side-item content-fire'>
                        <FaFireAlt/>
                    </S.Block>
                    {getHotNumbers(props.lastNumbers).map((number, index) => (
                        <S.Block className='content-side-item' key={index}>
                            <S.Text className={Data['RED'].includes(number) ? 'content-side-item-red' : Data['BLACK'].includes(number) ? 'content-side-item-black' : 'content-side-item-green' + ' content-side-item'}>{number}</S.Text>
                        </S.Block>
                    ))}
                </S.Block>
                <S.Block className='content'>
                    
                </S.Block>
                <S.Block className='content-side'>
                    <S.Block className='content-side-item content-snow'>
                        <FaRegSnowflake/>
                    </S.Block>
                    {getColdNumbers(props.lastNumbers).map((number, index) => (
                        <S.Block className='content-side-item' key={index}>
                            <S.Text className={Data['RED'].includes(number) ? 'content-side-item-red' : Data['BLACK'].includes(number) ? 'content-side-item-black' : 'content-side-item-green' + ' content-side-item'}>{number}</S.Text>
                        </S.Block>
                    ))}
                </S.Block>
            </S.Content>
        </S.Container>
    );
};

export default HotCold;