import './style.scss'

export default function TextInput({ name, label='', value='', rows=4, fullWidth= false, max_length=20,...props }) {
  function onChange(event) {
    event.preventDefault()
    const new_value = event.target.value
    if (new_value.length <= max_length) props.onchange(new_value)
  }

  return <div className={'input-wrapper' + (fullWidth?' fullwidth':'')}>
    <h4 className='text-input-label'>{label}</h4>
    <textarea
      rows={rows}
      name={name}
      value={value}
      onChange={onChange}>
    </textarea>
    <div className='helper'>
      <p className='helper-text'>{(value.length >= max_length) ? 'Text limit reached' : ''}</p>
      <div className='text-input-counter'>{value.length}/{max_length}</div>
    </div>
    { (value.length == 0) ?
      <div className='overlay'>
        <button onClick={async () => {
          const text = await navigator.clipboard.readText()
          if (text) props.onchange(text.substring(0, max_length))
        }} style={{display: 'flex', alignItems: 'center'}}>
          <span className="material-icons">content_paste</span>
          <span>Paste Text</span>
        </button>
      </div>
      :
      null
    }
  </div>
}
