import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 26vmax;
    height: 1.6vmax;

    gap: .187vmax;

    overflow: hidden;
`;

export const Block = styled.div`
    display: flex;
    align-items: center;

    width: 100%;

    gap: .187vmax;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 2vmax;
    height: 1.6vmax;

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
    &.item-title {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 7vmax;
        height: 100%;

        font-weight: 500;
        font-size: .8vmax;
        
        color: #EBEBEB;
    }
    &.item {
        font-weight: 500;
        font-size: .8vmax;
        
        color: #EBEBEB;
    }
`;