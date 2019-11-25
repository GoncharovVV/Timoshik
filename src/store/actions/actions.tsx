import { IAction } from '../../interfaces/actions.interface';

export const inc = ():IAction => ({type: 'INC'});

export const dec = ():IAction => ({type: 'DEC'});

export const rnd = ():IAction => ({
    type: 'RND',
    payload: Math.floor(Math.random()*10)
  });