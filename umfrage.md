---
layout: base
title: Umfrage
---

<div class="d-flex flex-column flex-md-row align-items-center justify-content-center bg-dark text-white p-4">
    <img src="/assets/MietzekaterIconTransparent.webp" alt="Mietzekater Logo" class="mb-3 mb-md-0 me-md-4" style="width: 100px; height: 100px;">
    <div class="text-center text-md-start">
        <h1 class="display-4 mb-0">Mietzekater.de</h1>
        <p class="lead mb-0">Gemeinsam Mieten</p>
    </div>
</div>

<div class="container-fluid p-0 vh-75">
    <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSdUhBfAD76VdgoyRpc5U252SDoK5GgZza6Ffh0apWkqp2zOfw/viewform?embedded=true" 
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
        // Calculate available height
        const headerHeight = document.querySelector('.bg-dark').offsetHeight;
        const availableHeight = window.innerHeight - headerHeight;
        
        // Set iframe to fill remaining height
        iframe.style.height = `${availableHeight}px`;
        
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
.container-fluid.vh-100 {
    height: calc(100vh - 140px); /* Subtract header height */
}
</style>
