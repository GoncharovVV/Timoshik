export interface IType {
  type: 'INC' | 'DEC' | 'RND',
}
export interface IAction extends IType{
  payload?: number
};
export interface IReducer {
  (state: number | undefined, action: IAction): number;
};
export default {

}