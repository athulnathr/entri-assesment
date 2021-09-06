import { takeEvery } from "redux-saga/effects";
import { updateFilter, resetFilter } from "./slice.js";
import queryString from "query-string";

const getQuery = () => {
  const { search } = window.location;
  return queryString.parse(search, { arrayFormat: "bracket" });
};

const updateQuery = (params) => {
  const query = getQuery();
  const search = queryString.stringify(
    {
      ...query,
      ...params,
    },
    { arrayFormat: "bracket" }
  );
  window.history.replaceState({}, "", "?" + search);
};

const resetQuery = () => {
  const search = queryString.stringify({}, { arrayFormat: "bracket" });
  window.history.replaceState({}, "", "?" + search);
};

function updateURLParams({ payload = {} }) {
  updateQuery({ [payload.filter]: payload.value });
}

export default function* watchFilterUpdatesSaga() {
  yield takeEvery(updateFilter.toString(), updateURLParams);
  yield takeEvery(resetFilter.toString(), resetQuery);
}
