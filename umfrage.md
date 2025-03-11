---
layout: base
title: Umfrage
---

<div class="container-fluid p-0 vh-75">
    <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSfRkv-80NpNldMYluesfpoRSyB7tjP2kmEm4kKryT_zYKyxwA/viewform?embedded=true" 
        width="100%" 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0"
        id="survey-iframe"
        onload="resizeIframe(this)">
        Loading…
    </iframe>
</div>

<script>
function resizeIframe(iframe) {
    function adjustIframe() {
        // Set iframe to fill remaining height
        iframe.style.height = `${window.innerHeight * 0.75}px`;
        
        // Ensure content is fully visible
        iframe.contentWindow.document.body.style.overflow = 'auto';
    }
    
    // Initial adjustment
    adjustIframe();
    
    // Readjust on window resize
    window.addEventListener('resize', adjustIframe);
    
    // Watch for changes in the iframe content
    const observer = new MutationObserver(adjustIframe);
    
    observer.observe(iframe.contentWindow.document.body, {
        childList: true, 
        subtree: true
    });
}
</script>

<style>
#survey-iframe {
    display: block;
    border: none;
    width: 100%;
    height: 100%;
    overflow: auto;
}
</style>
