import { Exercise } from '@/interfaces';
import { Dispatch, Reducer, createContext } from 'react';

export interface ICtxFavoriteExercises {
  favoriteExercises: Exercise[] | [];
  dispatch: Dispatch<action>;
}

interface action {
  type: string;
  payload?: Exercise;
}

const CtxFavoriteExercises = createContext<ICtxFavoriteExercises>({} as ICtxFavoriteExercises);

const initialState: Exercise[] = [
  {
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
    id: '0001',
    name: '3/4 sit-up',
    target: 'abs',
  },
  {
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0002.gif',
    id: '0002',
    name: '45° side bend',
    target: 'abs',
  },
];

const reducer: Reducer<Exercise[], action> = (state, action): Exercise[] | [] => {
  switch (action.type) {
    case 'REMOVE':
      if (state.length > 0) {
        const filteredArr = state.filter(e => e.id !== action.payload?.id);
        return [...filteredArr];
      }
      return [...state];
    case 'ADD':
      // console.log(action.payload);
      if (action.payload) {
        if (state.findIndex(e => e.id === action.payload?.id) === -1) {
          return [...state, action.payload];
        }
        return [...state];
      }
      throw Error('add paylod');
    default:
      return state;
  }
};

export { reducer, initialState, CtxFavoriteExercises };
