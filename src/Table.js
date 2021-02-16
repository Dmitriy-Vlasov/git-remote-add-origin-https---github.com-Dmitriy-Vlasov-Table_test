import React, { Fragment } from 'react';

import styled from 'styled-components';

// styled-components_________________________________

const StyledTable = styled.table`
font-family: sans-serif;
margin: 0 auto;
border-spacing: 0`;

const StyledDelButton = styled.div`
border-radius: 50%;
height: 20px;
width: 20px;
text-align: center;
background-color: red;
color: white;
font-size: 14px;
display: flex:
align-items: center;
justify-content: center;
vertical-align: middle;
cursor: pointer;
visibility: hidden;`;

const StyledLines = styled.tr`
:first-child * {
    background-color: ${props => props.head ? "#01987a" : null};
    color: ${props => props.head ? "white" : null};
}

:hover {
    background-color: lightgrey;

    ${StyledDelButton} {
        visibility: visible;
    }
}`;

const StyledCell = styled.td`
border: 1px solid grey;`;

const StyledInput = styled.input`
height: 40px;
border: none;
outline-none;
padding: 0 10px;
background-color: transparent;`;


const DelButtonCell = styled.td`
padding: 0 10px;
background-color: white;`;

const StyledAddButton = styled.div`
margin: 20px auto;
width: 30px;
height: 30px;
background-color: green;
border-radius: 50%;
text-align: center;
font-size: 20px;
color: white;
font-weight: 700;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;`;

// components_________________________________

function Table(props) {
    const { data, head, onEdit, onRemove, onAdd } = props;

    const lines = data.map((el, idx) => {
        return (
            <StyledLines key={el.id} head={head}>
                {el.value.map((el, idx, arr) => {
                    return (
                        <StyledCell key={idx}>
                            <StyledInput
                                type="text"
                                key={idx}
                                defaultValue={el}
                                onChange={(e) => onEdit(arr, idx, e.target.value)} />
                        </StyledCell>
                    )
                })}
                {
                (idx === 0 && head === true) ?
                        null :
                        <DelButtonCell>
                            <StyledDelButton onClick={() => onRemove(el.id)}>x</StyledDelButton>
                        </DelButtonCell>
                }
            </StyledLines>
        )
    });

    return (
        <Fragment>
            <StyledTable>
                <tbody>
                    {lines}
                </tbody>
            </StyledTable>
            <StyledAddButton onClick={onAdd}>+</StyledAddButton>
        </Fragment>
    );
}

export default Table;