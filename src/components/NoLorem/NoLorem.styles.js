import styled from 'styled-components'

export const Wrapper = styled.div`
  body {
    background: var(--veryLightGrey);
  }
  max-width: var(--max-width);
  margin: 0 auto;
`
export const Title = styled.h1`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-top: 30px;
`
export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`

export const Form = styled.form`
  display: flex;
  justify-content: center;

  input {
    width: 70px;
    margin-left: 10px;
  }
`
