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
    font-weight: 500;
    font-size: .8vmax;
    
    color: #EBEBEB;
`;