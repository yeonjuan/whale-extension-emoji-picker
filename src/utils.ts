export const enumToArray = (em: object) => (
  Object.keys(em as object)
  .filter(key => typeof em[key] === 'number')
  .map(key => ({id: em[key], name: key}))
);
