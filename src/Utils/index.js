import { formatDistance } from "date-fns";

export const humanDiffDate = (time, text = "ago") => {
  try {
    return `${formatDistance(new Date(String(time)), new Date())} ${text}`;
  } catch (e) {
    return ``;
  }
};
