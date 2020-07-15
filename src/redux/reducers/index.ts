// ./src/store/index.ts

import { combineReducers, Reducer } from 'redux';

// Import your state types and reducers here.
import githubRepositoryReducer from './github/github-repository-reducer';
import { GithubState } from '../store/github/types';



// The top-level state object
export interface ApplicationState {
  github: GithubState
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  github: githubRepositoryReducer
});

export default reducers;