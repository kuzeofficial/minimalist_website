import dayjs from "dayjs";
export const convert_to_date = (date: string) => {
  return dayjs(date).format("MMMM DD, YYYY");
};
