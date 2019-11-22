import { IAction } from '../../interfaces/actions.interface';

export const inc = ():IAction => ({type: 'INC'});

export const dec = ():IAction => ({type: 'DEC'});

export const rnd = (payload: any):IAction => ({type: 'RND', payload});