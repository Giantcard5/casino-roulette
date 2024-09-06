import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    flex-direction: column;

    width: 100%;
    height: 80%;

    gap: .6vmax;
`;

export const Content = styled.div`
    display: flex;

    width: 100%;
    height: 100%;
    
    gap: .6vmax;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 10%;
`;

export const Block = styled.div<{ width?: number }>`
    &.header-items {
        display: flex;
        align-items: center;

        width: 100%;

        gap: .19vmax;

        overflow: hidden;
    }
    &.content {
        display: flex;
        align-items: center;

        width: 64%;        
        height: 91.8%;

        background: red;
    }
    &.content-side {
        display: flex;
        align-items: center;

        flex-direction: column;

        width: 14%;
        height: 91.8%;

        border: .1vmax solid #EBEBEB;
        border-radius: .15vmax;
    }
    &.content-fire {
        width: 100%;
        height: 100%;

        background: #ea2a2791;
        color: #EBEBEB;

        border-radius: .2vmax .2vmax 0vmax 0vmax;
    }
    &.content-snow {
        background: #29aaff91;
        color: #EBEBEB;
    }
    &.content-side-item {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 2vmax;
    }
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 1.6vmax;
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
    &.header-items {
        font-weight: 500;
        font-size: .8vmax;
        
        color: #EBEBEB;
    }
    &.content-side-item {
        font-weight: 500;
        font-size: .9vmax;
    }
    &.content-side-item-red {
        color: #EA2B27;
    }
    &.content-side-item-black {
        color: #EBEBEB;
    }
    &.content-side-item-green {
        color: #008847;
    }
`;