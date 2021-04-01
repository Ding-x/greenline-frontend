import { mount } from 'enzyme'
import {
  Table,
  TableHead,
  TableRow,
  TableContainer,
  TableBody,
  TableCell,
  TextField,
} from '@material-ui/core'
import CartTable from './CartTable'

describe('Counter', () => {
  beforeEach(() => {})

  it('basic render', () => {
    const wrapper = mount(<CartTable />)
    expect(wrapper.find(TableContainer)).toHaveLength(1)
    expect(wrapper.find(Table)).toHaveLength(1)
    expect(wrapper.find(TableHead)).toHaveLength(1)
    expect(wrapper.find(TableBody)).toHaveLength(1)
    expect(wrapper.find(TableRow)).toHaveLength(5)
    expect(wrapper.find(TextField)).toHaveLength(3)
    expect(
      wrapper
        .find(TableCell)
        .at(wrapper.find(TableCell).length - 1)
        .text()
    ).toBe('15.00')
  })

  it('grapes 1, apples 0, peaches 1', () => {
    const event = { target: { value: '0' } } as any
    const wrapper = mount(<CartTable />)
    const change = wrapper.find(TextField).at(1).props().onChange
    if (change) {
      change(event)
    }
    expect(
      wrapper
        .find(TableCell)
        .at(wrapper.find(TableCell).length - 1)
        .text()
    ).toBe('12.00')
  })

  it('grapes 2, apples 2, peaches 1', () => {
    const event = { target: { value: '2' } } as any
    const wrapper = mount(<CartTable />)
    const changeGrapes = wrapper.find(TextField).at(0).props().onChange
    const changeApples = wrapper.find(TextField).at(1).props().onChange
    if (changeGrapes) {
      changeGrapes(event)
    }
    if (changeApples) {
      changeApples(event)
    }
    expect(
      wrapper
        .find(TableCell)
        .at(wrapper.find(TableCell).length - 1)
        .text()
    ).toBe('16.80')
  })

  it('grapes 3, apples 5, peaches 2', () => {
    const grapeEvent = { target: { value: '3' } } as any
    const appleEvent = { target: { value: '5' } } as any
    const peachevent = { target: { value: '2' } } as any
    const wrapper = mount(<CartTable />)
    const changeGrapes = wrapper.find(TextField).at(0).props().onChange
    const changeApples = wrapper.find(TextField).at(1).props().onChange
    const changePeaches = wrapper.find(TextField).at(2).props().onChange

    if (changeGrapes) {
      changeGrapes(grapeEvent)
    }
    if (changeApples) {
      changeApples(appleEvent)
    }
    if (changePeaches) {
      changePeaches(peachevent)
    }
    expect(
      wrapper
        .find(TableCell)
        .at(wrapper.find(TableCell).length - 1)
        .text()
    ).toBe('36.00')
  })

  it('grapes 7, apples 7, peaches 7', () => {
    const grapeEvent = { target: { value: '7' } } as any
    const appleEvent = { target: { value: '7' } } as any
    const peachevent = { target: { value: '7' } } as any
    const wrapper = mount(<CartTable />)
    const changeGrapes = wrapper.find(TextField).at(0).props().onChange
    const changeApples = wrapper.find(TextField).at(1).props().onChange
    const changePeaches = wrapper.find(TextField).at(2).props().onChange

    if (changeGrapes) {
      changeGrapes(grapeEvent)
    }
    if (changeApples) {
      changeApples(appleEvent)
    }
    if (changePeaches) {
      changePeaches(peachevent)
    }
    expect(
      wrapper
        .find(TableCell)
        .at(wrapper.find(TableCell).length - 1)
        .text()
    ).toBe('85.80')
  })

  it('grapes 0, apples 0, peaches 0', () => {
    const grapeEvent = { target: { value: '0' } } as any
    const appleEvent = { target: { value: '0' } } as any
    const peachevent = { target: { value: '0' } } as any
    const wrapper = mount(<CartTable />)
    const changeGrapes = wrapper.find(TextField).at(0).props().onChange
    const changeApples = wrapper.find(TextField).at(1).props().onChange
    const changePeaches = wrapper.find(TextField).at(2).props().onChange

    if (changeGrapes) {
      changeGrapes(grapeEvent)
    }
    if (changeApples) {
      changeApples(appleEvent)
    }
    if (changePeaches) {
      changePeaches(peachevent)
    }
    expect(
      wrapper
        .find(TableCell)
        .at(wrapper.find(TableCell).length - 1)
        .text()
    ).toBe('0.00')
  })

  it('grapes -3, apples -2, peaches 0', () => {
    const grapeEvent = { target: { value: '-3' } } as any
    const appleEvent = { target: { value: '-2' } } as any
    const peachevent = { target: { value: '0' } } as any
    const wrapper = mount(<CartTable />)
    const changeGrapes = wrapper.find(TextField).at(0).props().onChange
    const changeApples = wrapper.find(TextField).at(1).props().onChange
    const changePeaches = wrapper.find(TextField).at(2).props().onChange

    if (changeGrapes) {
      changeGrapes(grapeEvent)
    }
    if (changeApples) {
      changeApples(appleEvent)
    }
    if (changePeaches) {
      changePeaches(peachevent)
    }
    expect(
      wrapper
        .find(TableCell)
        .at(wrapper.find(TableCell).length - 1)
        .text()
    ).toBe('0.00')
  })
})
