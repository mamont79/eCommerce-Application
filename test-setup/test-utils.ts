import TEST_HTML from './TEST_HTML';

function render(content: Element) {
  // Helps render elements for test purposes.
  document.body.innerHTML = TEST_HTML;
  const root = document.body.querySelector('#root');
  root?.append(content);
}
