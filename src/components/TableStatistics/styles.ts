import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    flex-direction: column;

    width: 18vmax;
    height: 40%;

    padding: 19.875px;

    background: #141313;
    border-radius: .3vmax;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;

    flex-direction: column;

    width: 100%;
    height: 80%;

    gap: .4vmax;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;

    flex-direction: column;

    width: 100%;
    height: 10%;

    gap: .7vmax;
`;

export const Block = styled.div<{ width?: number }>`
    &.header-navigate {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 80%;

        gap: .8vmax;        
        
        border-bottom: .1vmax solid #EBEBEB;
    }
    &.header-items {
        display: flex;
        align-items: center;

        width: 100%;

        gap: .19vmax;

        overflow: hidden;
    }
    &.content-items {
        display: flex;
        justify-content: space-between;

        width: 100%;
        height: 14%;
    }
    &.content-section-item {
        display: flex;
        align-items: center;
        justify-content: space-between;

        flex-direction: column;

        width: ${props => props.width}%;
        min-width: 26%;
    }
    &.content-section-item-green {
        display: flex;
        align-items: center;
        justify-content: space-between;

        flex-direction: column;

        width: ${props => props.width}%;
        min-width: 8%;
    }
    &.content-section-item-footer {
        display: flex;
        align-items: center;

        flex-direction: column;

        width: 100%;
        height: 4vmax;

        margin: 0vmax .1vmax;

        &:first-child {
            margin: 0vmax .1vmax 0vmax 0vmax;
        }
        &:last-child {
            margin: 0vmax 0vmax 0vmax .1vmax;
        }
    }
    &.content-section-subitem {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 60%;

        border: .1vmax solid #EBEBEB;

        background: #B8B5B528;
    }

    &.content-section-subitem-green {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 60%;

        background: #008847;
        border: .1vmax solid #EBEBEB;
    }
    &.content-section-subitem-footer {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: ${props => props.width}%;
        min-height: 38%;
        
        background: #B8B5B528;
        border: .1vmax solid #EBEBEB;
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
    &.content-section-item {
        font-weight: 500;
        font-size: .65vmax;
        
        color: #EBEBEB;
    }
    &.content-section-subitem {
        font-weight: 500;
        font-size: .6vmax;
        
        color: #EBEBEB;

        text-transform: uppercase;

    }
`;