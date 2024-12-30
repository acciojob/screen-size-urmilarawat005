 function updateWindowSize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const sizeInfo = document.getElementById('sizeInfo');
        sizeInfo.innerHTML = `<h1>Width: ${width} and Height: ${height}</h1>`;
    }

    // Update the size on page load and whenever the window is resized
    window.addEventListener('resize', updateWindowSize);
    
    // Call the function initially to set the size when the page loads
    updateWindowSize();