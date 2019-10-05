export const enumToArray = (em: object) => (
  Object.keys(em as object)
  .filter(key => typeof em[key] === 'number')
  .map(key => ({id: em[key], name: key}))
);

export const copyToClipboard = (content: string) => {
  const textField = document.createElement('textarea');
  textField.innerText = content;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand('copy');
  textField.remove();
}
