export const orderByDate = (prev: any, current: any) => {
  const result =
    <any>new Date(current.publishedAt) - <any>new Date(prev.publishedAt);
  return result;
};
