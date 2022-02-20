import { useReducer, useEffect } from 'react'
import TextInput from '../textarea'
import { get_answer, wake_up_model } from '../../api/passage'
import './style.scss'

const sample_passage = "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be visible to the naked eye in broad daylight.Venus lies within Earth's orbit, and so never appears to venture far from the Sun, either setting in the west just after dusk or rising in the east a little while before dawn. Venus orbits the Sun every 224.7 Earth days.It has a synodic day length of 117 Earth days and a sidereal rotation period of 243 Earth days. As a consequence, it takes longer to rotate about its axis than any other planet in the Solar System, and does so in the opposite direction to all but Uranus. This means the Sun rises in the west and sets in the east.Venus does not have any moons, a distinction it shares only with Mercury among the planets in the Solar System.Venus is a terrestrial planet and is sometimes called Earth's \"sister planet\" because of their similar size, mass, proximity to the Sun"
const sample_question = "What is the second planet from sun?"

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

  useEffect(wake_up_model, [])

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
          sample_text={sample_passage}
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
          sample_text={sample_question}
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
