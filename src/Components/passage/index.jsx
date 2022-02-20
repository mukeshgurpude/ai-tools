import { useReducer } from 'react'
import TextInput from '../textarea'
import './style.scss'

function reducer(state, action) {
  switch(action.type) {
    case 'context_change':
      return {...state, context: action.value}
    case 'question_change':
      return {...state, question: action.value}
    case 'set_answer':
      return {...state, answer: action.value}
    default:
      return state
  }
}

export default function PassageAnswers() {
  const [state, dispatch] = useReducer(reducer, { context: '', question: '', loading: '', answer: '' })

  return <>
    <section>
      <div>
        <label>Copy the passage below</label>
        <TextInput
          name='context'
          label='Context'
          rows={10}
          value={state.context}
          max_length={1024}
          fullWidth
          onchange={(value) => dispatch({type: 'context_change', value})}
        />
      </div>
      <div>
        <label>Copy the question below</label>
        <TextInput
          name='question'
          label='Question'
          rows={6}
          max_length={100}
          value={state.question}
          onchange={(value) => dispatch({type: 'question_change', value})}
        />
        <button>Get Answer</button>
      </div>
    </section>
    <p>{state.answer}</p>
  </>
}
