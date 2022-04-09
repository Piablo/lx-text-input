import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const TextInput = (props) => {
    const  {
        placeholder,
        onBlur = () => {},
        validations = [],
        incrementControlValidator = null,
    } = props

    const [value, setValue] = useState()
    const [errorMessage, setErrorMessage] = useState()

    useEffect(() => {
        if(incrementControlValidator){
            runValidate()
        }

    }, [incrementControlValidator])

    const runValidate = () => {
        validate(value)
    }
   
    function validate(value) { 
        let response
        for(let i = 0; i < validations.length; i++){
            const validation = validations[i]
            switch(validation){
                case 'REQUIRED':
                    if(!value){
                        response = {
                           success: false,
                           value
                        }   
                        setErrorMessage("Cannot be blank." )
                    }else{
                        response = {
                            success: true,
                            value
                        }  
                        setErrorMessage("")
                    }  
                   break
                case 'EMAIL':
                    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                    const testSuccess = regex.test(value)
                    if(testSuccess){
                        response = {
                            success: true,
                            value
                        }  
                        setErrorMessage("")
                    }else{
                        response = {
                            success: false,
                            value
                        }  
                        setErrorMessage("Valid email required.")
                    }
                    break
                default:
                    break
           }
        }
        onBlur(response)
    }

    return(
        <Container>
            <Placeholder>{placeholder}</Placeholder>
            <Input onChange={(event) => setValue(event.target.value)} onBlur={() => validate(value)}/>
            <ErrorContainer>{errorMessage}</ErrorContainer>
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