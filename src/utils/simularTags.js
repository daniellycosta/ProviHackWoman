export const simularTags = () => {
  const tags = ["Novo", "Front", "Back", "UI/UX"];
  const tagsGeradas = [];
  const indiceRandomico = Math.floor(Math.random() * (1 + 3 - 1) + 1);
  tagsGeradas.push(tags[indiceRandomico]);
  const ehNovo = Math.floor(Math.random() * (1 + 1));
  if (ehNovo) tagsGeradas.unshift(tags[0]);
  return tagsGeradas;
};
