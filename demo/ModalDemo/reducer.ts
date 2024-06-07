import { Settings, IReducerAction } from './types';

const reducer = (state: Settings, action: IReducerAction): Settings => {
  const { payload } = action;

  return ({
    ...state,
    ...payload,
  });
};

export default reducer;
