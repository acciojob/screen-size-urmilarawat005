  function updateSize() {
            // Get the current window width and height
            const width = window.innerWidth;
            const height = window.innerHeight;

            // Select the <h1> inside the div with id sizeInfo
            const sizeInfo = document.getElementById('sizeInfo');
            const h1 = sizeInfo.querySelector('h1');

            // Update the text content with the new width and height
            h1.textContent = `Width: ${width} and Height: ${height}`;
        }

        // Initial size update when the page loads
        updateSize();

        // Add event listener to update size whenever the window is resized
        window.addEventListener('resize', updateSize);