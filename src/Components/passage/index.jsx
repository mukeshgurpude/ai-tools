import { useReducer } from 'react'
import TextInput from '../textarea'
import { get_answer } from '../../api/passage'
import './style.scss'

function reducer(state, action) {
  switch(action.type) {
    case 'context_change':
      return {...state, context: action.value}
    case 'question_change':
      return {...state, question: action.value}
    case 'set_answer':
      return {...state, answer: action.value}
    case 'loading':
      return {...state, loading: action.value}
    default:
      return state
  }
}

export default function PassageAnswers() {
  const [state, dispatch] = useReducer(reducer, { context: '', question: '', loading: false, answer: '' })

  function fetch_answer() {
    if(!state.question || !state.context) return
    dispatch({type: 'loading', value: true})
    get_answer(state.context, state.question)
      .then((res) => {
        dispatch({type: 'set_answer', value: res.body.output})
      })
      .catch(err => dispatch({type: 'set_answer', value: err.message}))
      .finally(() => dispatch({type: 'loading', value: false}))
  }

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
          onchange={(value) => {
            dispatch({type: 'set_answer', value: ''})
            dispatch({type: 'context_change', value})
          }}
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
        <button onClick={fetch_answer} >Get Answer</button>
      </div>
    </section>
    {
      state.loading ? <div className='output'><p>Loading...</p></div>
      : (
      (state.answer && state.question) ?
      <div className='output' data-empty={(state.answer === '')}>
        <p>{state.question}</p>
        <p>{state.answer}</p>
      </div>
      : null
    )}
  </>
}
