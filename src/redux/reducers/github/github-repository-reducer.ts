/* Import of all actions types */
import * as actionTypes from "../../actions/action-types";

/* Import initial state configuration */
import initialState from "../initial-state";

/* Type checking. */
import { Reducer, AnyAction } from 'redux';
import { GithubState, GithubRepositoryType } from "../../store/github/types";
import GithubRepositoryPropsType from "../../../typescript/types/shared/connected-components/github/Github-Repository-Type-Props";

/**
 * @interface ActionPayload => Payload of incoming action of Github repository reducer.
 */
interface ActionPayload extends AnyAction {
  payload: {
    data: {
      items: GithubRepositoryType[]
    };
  }
}



/**
 * @function githubRepositoryReducer => Reducer for managing Github repositories via Redux.
 * @param state   => Initial state for project detail`s reducer.
 * @param action  => Action that enters into Github repositories`s reducer.
 */
const githubRepositoryReducer: Reducer<GithubState, ActionPayload> = (
  state: GithubState = initialState.github,
  action: ActionPayload
) => {
  switch (action.type) {

    case actionTypes.FETCH_NEWEST_REPOS_SUCCESS: 

    return {
      ...state,
      repositories: action.payload.data.items
    }


    default:
      return state;
  }
};
export default githubRepositoryReducer;