import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: center;
    
    flex-wrap: wrap;
    
    width: 100%;
    height: auto;
    max-height: 100%;

    gap: .2vmax;

    overflow: auto;

    &::-webkit-scrollbar {
        width: 0vmax; 
        height: 0vmax; 
    }
    &::-webkit-scrollbar-track { 
        background: none; 
    }
`;


export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 1.591vmax;
    height: 1.2vmax;

    border: .1vmax solid #EBEBEB;
    border-radius: .15vmax;

    &.item-red {
        background: #EA2B27;
    }
    &.item-black {
        background: #050411C2;
    }
    &.item-green {
        background: #008847;
    }
`;

export const Text = styled.span`
    &.header-navigate {
        display: flex;
        justify-content: center;

        height: 1.2vmax;

        font-weight: 500;
        font-size: .58vmax;
        
        color: #EBEBEB;

        text-transform: uppercase;
    }
    &.header-items {
        font-weight: 500;
        font-size: .8vmax;
        
        color: #EBEBEB;
    }
`;