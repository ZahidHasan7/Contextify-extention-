let popup = null;

document.addEventListener('mouseup', function(event) {
    const selectedText = window.getSelection().toString().trim();

    if (selectedText.length > 0) {
        // Create and show the popup
        showPopup(event.clientX, event.clientY);

        // Send a message to the background script to get the summary
        chrome.runtime.sendMessage({ text: selectedText }, function(response) {
            if (chrome.runtime.lastError) {
                // Handle potential errors (e.g., background script not ready)
                updatePopupContent('Error: Could not connect to the extension.');
                return;
            }
            // Update the popup with the summary from the AI
            updatePopupContent(response.summary);
        });
    }
});

// Remove popup if user clicks elsewhere
document.addEventListener('mousedown', function(event) {
    if (popup && !popup.contains(event.target)) {
        document.body.removeChild(popup);
        popup = null;
    }
});

function showPopup(x, y) {
    if (popup) {
        document.body.removeChild(popup);
    }

    popup = document.createElement('div');
    popup.id = 'contextify-popup';
    popup.innerHTML = '<div class="contextify-loader"></div><p>Contextifying...</p>';
    popup.style.left = `${x + window.scrollX}px`;
    popup.style.top = `${y + window.scrollY + 15}px`;

    document.body.appendChild(popup);
}

// NEW, IMPROVED FUNCTION
function updatePopupContent(content) {
    if (popup) {
        // Use the 'marked' library to convert Markdown to HTML
        // The 'marked.parse' function does all the magic!
        const formattedContent = marked.parse(content);
        
        popup.innerHTML = `<div class="contextify-content">${formattedContent}</div>`;

        // Add a close button
        const closeButton = document.createElement('button');
        closeButton.id = 'contextify-close-btn';
        closeButton.innerHTML = '&times;';
        closeButton.onclick = () => {
            if(popup) document.body.removeChild(popup);
            popup = null;
        };
        popup.prepend(closeButton);
    }
}