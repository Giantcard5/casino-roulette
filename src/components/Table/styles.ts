import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    width: 26vmax;
    height: 14vmax;
`;

export const Block = styled.div`
    &.item-header {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 8%;
        height: 58%;

        border-radius: .4vmax 0vmax 0vmax .4vmax;

        border-top: .15vmax solid #EBEBEB;
        border-bottom: .15vmax solid #EBEBEB;
        border-left: .15vmax solid #EBEBEB;

        background: #008847;
    }
    &.item-content {
        width: 84%;
        height: 100%;
    }
    &.item-content-numbers {
        display: grid;

        grid-template-rows: repeat(3, 2.63vmax);
        grid-template-columns: repeat(12, 1.815vmax);

        width: 100%;
        height: 58%;
    
        border: .15vmax solid #EBEBEB;
        border-right: none;
    }
    &.item-content-number {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100%;

        background: #050411C2;

        border: .15vmax solid #EBEBEB;

        &:nth-child(-n+12) {
            border: none;
        }
        &:nth-child(-n+12):nth-child(even) {
            border-left: .15vmax solid #EBEBEB;
            border-right: .15vmax solid #EBEBEB;
        }
        &:nth-child(n+13):nth-child(-n+24) {
            border: .15vmax solid #EBEBEB;
        }
        &:nth-child(n+13):nth-child(-n+24):nth-child(odd) {
            border-left: none;
            border-right: none;
        }
        &:nth-last-child(-n+12) {
            border: none;
        }
        &:nth-last-child(-n+12):nth-child(even) {
            border-left: .15vmax solid #EBEBEB;
            border-right: .15vmax solid #EBEBEB;
        }

        &:nth-child(1),
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(6),
        &:nth-child(7),
        &:nth-child(9),
        &:nth-child(10),
        &:nth-child(12),
        &:nth-child(14),
        &:nth-child(17),
        &:nth-child(20),
        &:nth-child(23),
        &:nth-child(25),
        &:nth-child(27),
        &:nth-child(30),
        &:nth-child(31),
        &:nth-child(33),
        &:nth-child(36) {
            background: #EA2B27;
        }
        &:nth-child(1):hover, &:nth-child(1).selected,
        &:nth-child(3):hover, &:nth-child(3).selected,
        &:nth-child(4):hover, &:nth-child(4).selected,
        &:nth-child(6):hover, &:nth-child(6).selected,
        &:nth-child(7):hover, &:nth-child(7).selected,
        &:nth-child(9):hover, &:nth-child(9).selected,
        &:nth-child(10):hover, &:nth-child(10).selected,
        &:nth-child(12):hover, &:nth-child(12).selected,
        &:nth-child(14):hover, &:nth-child(14).selected,
        &:nth-child(17):hover, &:nth-child(17).selected,
        &:nth-child(20):hover, &:nth-child(20).selected,
        &:nth-child(23):hover, &:nth-child(23).selected,
        &:nth-child(25):hover, &:nth-child(25).selected,
        &:nth-child(27):hover, &:nth-child(27).selected,
        &:nth-child(30):hover, &:nth-child(30).selected,
        &:nth-child(31):hover, &:nth-child(31).selected,
        &:nth-child(33):hover, &:nth-child(33).selected,
        &:nth-child(36):hover, &:nth-child(36).selected {
            background: #E24E4B;
        }
        &:hover, &.selected {
            background: #191922C2;
        }
    }
    &.item-content-dozens {
        display: flex;

        width: 100%;
        height: 21%;

        & div {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 100%;
            height: 100%;

            background: #050411C2;

            &:first-child {
                border-left: .15vmax solid #EBEBEB;
                border-right: .15vmax solid #EBEBEB;
            }
            &:last-child {
                border-left: .15vmax solid #EBEBEB;
                border-right: .15vmax solid #EBEBEB;
            }
            &:hover, &.selected {
                background: #191922C2;
            }
        }
    }
    &.item-content-others {
        display: flex;

        width: 100%;
        height: 21%;

        & div {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 100%;
            height: 100%;
            
            border-top: .15vmax solid #EBEBEB;
            border-bottom: .15vmax solid #EBEBEB;

            background: #050411C2;
            
            &:first-child {
                border-radius: 0vmax 0vmax 0vmax .4vmax;

                border-left: .15vmax solid #EBEBEB;
                border-right: .15vmax solid #EBEBEB;
            }
            &:last-child {
                border-left: .15vmax solid #EBEBEB;
                border-right: .15vmax solid #EBEBEB;
                border-radius: 0vmax 0vmax .4vmax 0vmax;
            }
            &:nth-child(3) {
                border-left: .15vmax solid #EBEBEB;
                border-right: .15vmax solid #EBEBEB;

                background: #EA2B27;
            }
            &:nth-child(3):hover, &:nth-child(3).selected {
                background: #E24E4B;
            }
            &:nth-child(4) {
                border-right: .15vmax solid #EBEBEB;
            }
            &:hover {
                background: #191922C2;
            }
        }
    }
    &.item-footer {
        display: flex;
        flex-direction: column;

        width: 8%;
        height: 58%;

        border-radius: 0vmax .4vmax .4vmax 0vmax;
    }
    &.item-footer-column {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 33.3%;

        background: #050411C2;

        &:hover, &.selected {
            background: #191922C2;
        }
    }
    &.item-footer-column:first-child {
        border-radius: 0vmax .4vmax 0vmax 0vmax;
        border-top: .15vmax solid #EBEBEB;
        border-right: .15vmax solid #EBEBEB;
    }
    &.item-footer-column:nth-child(2) {
        border-top: .15vmax solid #EBEBEB;
        border-right: .15vmax solid #EBEBEB;
        border-bottom: .15vmax solid #EBEBEB;
    }
    &.item-footer-column:last-child {
        border-radius: 0vmax 0vmax .4vmax 0vmax;
        border-bottom: .15vmax solid #EBEBEB;
        border-right: .15vmax solid #EBEBEB;
    }

    &.item-header:hover, &.selected { 
        background: #4CAC7DAD;
    }
`;

export const Text = styled.span`
    font-weight: 500;
    font-size: .8vmax;
    
    color: #EBEBEB;

    &.item-header {
        rotate: -90deg;
    }
`;