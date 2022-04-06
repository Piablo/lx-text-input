import React, { useState } from 'react'
import styled from 'styled-components'

const TextInput = (props) => {
    const  {
        placeholder,
        error = ""
    } = props

    const [value, setValue] = useState("")

    return(
        <Container>
            <Placeholder>{placeholder}</Placeholder>
            <Input value={value} onChange={(event) => setValue(event.target.value)}/>
            <ErrorContainer>{error}</ErrorContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    position: relative;
    height: 53px;
`
const Input = styled.input`
    width: calc(100% - 16px);
    height: 27px;
    outline: none;
    padding-left: 10px;
    border-radius: 10px;
    border: 1px solid rgba(0,0,0, .5);
    :focus {
        outline: none;
    }

`
const Placeholder = styled.div`
    background-color: white;
    position: absolute;
    left:10px;
    top: -9px;
`
const ErrorContainer = styled.div`
    color: red;
    height: 10px;
    padding-left: 10px;
`

export default TextInput