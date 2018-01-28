// src/batches/BatchItem.test.js
import React from 'react'
import { shallow } from 'enzyme'
import BatchItem from './BatchItem'
import Green from '../images/green.svg'
import Yellow from '../images/yellow.svg'
import Red from '../images/red.svg'

const batch = {
    batchNum: 'Spanish Omelette',
    summary: 'A traditional dish from Spanish cuisine called tortilla española or tortilla de patatas. It is an omelette made with eggs and potatoes, sometimes also with onion and/or chives or garlic; fried in oil and often served cold as an appetizer.',
    yellow: false,
    red: true,
    green: false,
}

describe('<BatchItem />', () => {
  const container = shallow(<BatchItem { ...batch } />)

  it('is wrapped in a article tag with class name "BatchItem"', () => {
    expect(container).toHaveTagName('article')
    expect(container).toHaveClassName('BatchItem')
  })

  it('contains a the batchNum', () => {
    expect(container.find('h1')).toHaveText(batch.batchNum)
  })
})
