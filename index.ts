export interface Action {
  type: string;
  payload?: any;
}

export type Reducer<S, A> = (state: S, action: A) => S;

export type Listener = () => void;

export interface Store<S, A extends Action> {
  getState: () => S;
  dispatch: (action: A) => void;
  subscribe: (listener: Listener) => () => void;
}

export function createStore<S, A extends Action>(
  reducer: Reducer<S, A>,
  initialState: S
): Store<S, A> {
  let state = initialState;
  let listeners: Listener[] = [];

  function getState(): S {
    return state;
  }

  function dispatch(action: A): void {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  }

  function subscribe(listener: Listener): () => void {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}
