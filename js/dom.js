const treeSection = document.getElementById('domTreeSection');
const toggleTreeButton = document.getElementById('toggleTree');
const header = document.getElementById('sharedHeader');
const toggleHeaderButton = document.getElementById('toggleHeaderHighlight');

toggleTreeButton?.addEventListener('click', () => {
  treeSection.hidden = !treeSection.hidden;
});

toggleHeaderButton?.addEventListener('click', () => {
  header.classList.toggle('header-highlight');
});
