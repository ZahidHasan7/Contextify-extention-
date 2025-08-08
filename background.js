chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.text) {
        // Retrieve the API key from storage
        chrome.storage.sync.get('apiKey', ({ apiKey }) => {
            if (!apiKey) {
                sendResponse({ summary: "Error: Gemini API key is not set. Please set it in the extension options." });
                return;
            }
            callGeminiAPI(request.text, apiKey)
                .then(summary => {
                    sendResponse({ summary: summary });
                })
                .catch(error => {
                    sendResponse({ summary: `Error: ${error.message}` });
                });
        });
        // Return true to indicate you want to send a response asynchronously
        return true;
    }
});

async function callGeminiAPI(text, apiKey) {
    // THIS IS THE UPDATED LINE WITH THE CORRECT MODEL NAME
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const prompt = `
        You are "Contextify", an expert summarizer. A user has highlighted a piece of text and needs context. 
        Provide a concise, well-structured summary of the following text. Format your response clearly.
        
        The highlighted text is: "${text}"

        Please provide the following:
        1.  **Simple Explanation:** A one-sentence summary for a layperson.
        2.  **Key Points:** A few bullet points detailing the main ideas or definition.
        3.  **Real-World Example (if applicable):** A brief, clear example.
    `;
    
    const requestBody = {
        "contents": [{
            "parts": [{
                "text": prompt
            }]
        }],
        "generationConfig": {
            "temperature": 0.5,
            "maxOutputTokens": 1024
        }
    };

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
        // We now extract the more detailed error message from Gemini's response
        const errorData = await response.json();
        const errorMessage = errorData.error?.message || "An unknown API error occurred.";
        throw new Error(`Gemini API error: ${errorMessage}`);
    }

    const data = await response.json();
    
    if (!data.candidates || data.candidates.length === 0) {
        return "The response was blocked or empty. This may be due to safety settings or the input provided.";
    }

    return data.candidates[0].content.parts[0].text.trim();
}