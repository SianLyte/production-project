import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter/model/slice/CounterSlice'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features/AuthByUsername'
import { useDispatch } from 'react-redux'

export function createReduxStore (initialState?: StateSchema) {

  const rootReducers:ReducersMapObject<StateSchema> = {
    user: userReducer,
    counter: counterReducer,
    loginForm: loginReducer
  }

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}

type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

export const useAppDispatch = useDispatch<AppDispatch>;
