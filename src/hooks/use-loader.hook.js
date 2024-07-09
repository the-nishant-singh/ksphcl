import { useCallback, useContext } from "react";

import { LoaderContext } from "../context/LoaderContext";
import { START_LOADER, STOP_LOADER } from "../constants";

export const useLoader = () => {
  const { dispatch } = useContext(LoaderContext);

  const startLoader = useCallback(
    (payload) => {
      dispatch({
        type: START_LOADER,
        payload,
      });
    },
    [dispatch]
  );

  const stopLoader = useCallback(
    (payload) => {
      dispatch({
        type: STOP_LOADER,
        payload,
      });
    },
    [dispatch]
  );

  return [startLoader, stopLoader];
};
