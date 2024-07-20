document.addEventListener('DOMContentLoaded', () => {
  const instagramReelsCheckbox = document.getElementById('instagramReels');
  const facebookReelsCheckbox = document.getElementById('facebookReels');
  const saveButton = document.getElementById('saveButton');

  // Load settings
  chrome.storage.sync.get(['instagramReels', 'facebookReels'], (data) => {
    instagramReelsCheckbox.checked = data.instagramReels;
    facebookReelsCheckbox.checked = data.facebookReels;
  });

  // Save settings
  saveButton.addEventListener('click', () => {
    chrome.storage.sync.set({
      instagramReels: instagramReelsCheckbox.checked,
      facebookReels: facebookReelsCheckbox.checked,
    }, () => {
      alert('Settings saved!');
    });
  });
});
