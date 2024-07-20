chrome.storage.sync.get(['instagramReels', 'facebookReels'], (data) => {
    if (data.instagramReels && window.location.host.includes('instagram.com')) {
      blurInstagramReels();
    }
    if (data.facebookReels && window.location.host.includes('facebook.com')) {
      blurFacebookReels();
    }
  });
  
  function blurInstagramReels() {
    const reels = document.querySelectorAll('div[role="presentation"]');
    reels.forEach(reel => {
      reel.style.filter = 'blur(10px)';
    });
  }
  
  function blurFacebookReels() {
    const reels = document.querySelectorAll('div[data-pagelet*="FeedUnit"]');
    reels.forEach(reel => {
      if (reel.innerText.includes('Reels')) {
        reel.style.filter = 'blur(10px)';
      }
    });
  }
  