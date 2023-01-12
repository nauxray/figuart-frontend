import dayjs from "dayjs";

export const formatDate = (timestamp) => {
  return dayjs(timestamp).format("DD MMMM YYYY");
};
