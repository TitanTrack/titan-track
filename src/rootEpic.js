import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';

const rootEpic = (action$) => {
  return action$
    .do((action) => {
      console.log({ action });
    })
    .ignoreElements();
}

export default combineEpics(rootEpic);
