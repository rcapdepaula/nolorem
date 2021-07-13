import React, { useState } from 'react'
import data from '../../data'
import { Wrapper, Form, Title, FormWrapper } from './NoLorem.styles'

const NoLorem = () => {
  // state to count the number of paragraphes
  const [count, setCount] = useState(0)
  // state text with empty array
  const [text, setText] = useState([])

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(e.target.amount.value)
    if (amount < 1 || amount > 9) {
      amount = 0
    }
    setText(data.slice(0, amount))
  }

  return (
    <Wrapper>
      <Title>No Lorem Ipsum?</Title>
      <FormWrapper>
        <h4>Parágrafos: </h4>
        <Form onSubmit={handleSubmit}>
          <input
            name='amount'
            id='amount'
            size='4'
            type='number'
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button type='submit'>Gerar</button>
        </Form>
      </FormWrapper>
      {/* // map over text */}
      {text.map((paragraph, index) => {
        return <p key={index}>{paragraph}</p>
      })}
    </Wrapper>
  )
}

export default NoLorem
