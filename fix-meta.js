// This script will run after page load to fix URLs
document.addEventListener('DOMContentLoaded', function() {
    const currentDomain = window.location.origin;
    
    // Fix canonical
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
        canonical.href = currentDomain + '/';
    }
    
    // Fix OG URL
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
        ogUrl.content = currentDomain + '/';
    }
});