// @flow
type State = {}

type Action = {
  type: string,
}

const initialState: State = {
  init: false,
}

const rootReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    default:
      return { ...state }
  }
}

export default rootReducer
