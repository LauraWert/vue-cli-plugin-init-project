import { addQuasarToVue } from '@laura-wert/vue-test-helpers'
import chai, { expect } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinonChai from 'sinon-chai'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).expect = expect
chai.use(sinonChai)
chai.use(chaiAsPromised)
addQuasarToVue()

