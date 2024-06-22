/* Instruments */
import {createReducer} from '@/fe-base/reducers/rootReducer';

const appReducer = createReducer({});

export const reducer = (state: any, action: any) => appReducer(state, action);