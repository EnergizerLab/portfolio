document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('tabs');
  container.textContent = 'Loading tabs...';

  chrome.tabs.query({ currentWindow: true }, (tabs) => {
    container.innerHTML = '';
    if (!tabs || tabs.length === 0) {
      container.textContent = 'No tabs found.';
      return;
    }

    tabs.forEach(tab => {
      const row = document.createElement('div');
      row.className = 'tab-row';

      const label = document.createElement('label');
      label.className = 'tab-label';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = !!(tab.mutedInfo && tab.mutedInfo.muted);
      checkbox.addEventListener('change', () => {
        chrome.tabs.update(tab.id, { muted: checkbox.checked });
      });

      const title = document.createElement('span');
      title.textContent = tab.title || tab.url || ('Tab ' + tab.id);
      title.className = 'tab-title';

      label.appendChild(checkbox);
      label.appendChild(title);
      row.appendChild(label);
      container.appendChild(row);
    });
  });
});
