import * as React from 'react'
import { assert } from 'chai'

import { createComposer } from 'recompost'
import { render } from 'test/utils/render'

interface NameProps {
  name: string
}

describe('ComponentDecoratorBuilder::withProps()', () => {
  it('it appends resulting props', async () => {
    const decorate = createComposer<NameProps>()
      .withProps(({ name }) => ({
        salutation: `Hello ${name}!`,
      }))
      .build()

    const Salutation = decorate(({ salutation }) => <div>{salutation}</div>)

    const container = await render(<Salutation name="Bob" />)
    assert.strictEqual(container.innerHTML, '<div>Hello Bob!</div>')
  })
})
