import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView2173045Reducer from '../features/CalendarView2173045/redux/reducers';
import Dashboard23173044Reducer from '../features/Dashboard23173044/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView2173045: CalendarView2173045Reducer,
Dashboard23173044: Dashboard23173044Reducer,

});