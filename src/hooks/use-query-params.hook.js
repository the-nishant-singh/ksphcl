import { useMemo } from "react";
import { useLocation } from "react-router-dom";

// TODO: remove once we migrate router to 6th version
export const useQueryParams = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};
