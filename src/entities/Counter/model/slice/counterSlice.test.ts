import { counterActions, counterReducer } from './CounterSlice';
import { CounterSchema } from '../types/counterSchema';


describe('counterSlice', () => {
  test('decrement', () => {
    const state: CounterSchema = {
      value: 10
    }
    expect(counterReducer(state, counterActions.decrement())).toEqual({value: 9});
  })


  test("increment", () => {
    const state : CounterSchema = {
      value: 10
    }
    expect(counterReducer(state, counterActions.increment())).toEqual<CounterSchema>({value: 11});
  })

  
  test("work with empty state", () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual<CounterSchema>({value: 1});
  })

})