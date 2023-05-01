const { default: styled } = require("styled-components");

export const ImgCredit = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 24px;
    display: inline-block;
`;
export const ListCredits = styled.ul`
display: block;
    gap: 20px;
    display: flex;
    justify-content: center;
    margin: -0px;
    flex-wrap: wrap;
`;
export const ItemCredit = styled.li`
    list-style-type: none;
    text-align: center;

    padding-bottom: 16px;
    flex-basis: calc(100% - 0px);
    flex-basis: calc((100% - 3 * 29px) / 3);
    padding-right: 0;
    padding-left: 0;
`;

export const NameCredit = styled.p`
    font-weight: 500;
    font-size: 20px;

    &:last-child {
        color: red;
    }
`;