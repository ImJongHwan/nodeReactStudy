import React from 'react'
import ReactDOM from 'react-dom'
import TextForm from './text'
import CBoxForm from './cbox'
import TextAreaForm from './textarea'
import RadioForm from './radio'
import SelectForm from './select'

ReactDOM.render(<div>
  <TextForm />
  <CBoxForm />
  <TextAreaForm />
  <RadioForm items={['초콜렛', '과자', '콜라']} />
  <SelectForm items={['초콜렛', '과자', '콜라']} />
</div>, document.getElementById('root'))
