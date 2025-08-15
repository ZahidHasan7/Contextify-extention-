# 🔍 Contextify - Instant Context Summarizer

![Contextify Demo]( https://github.com/ZahidHasan7/Contextify-extention-/blob/137ef5afe37f59f0880357eee7facc0cc099d5d1/contexify.PNG)  

**Contextify** is a powerful Chrome extension that gives you instant summarized background information and deep context about any highlighted word, phrase, or sentence on a webpage—without switching tabs or searching manually.

---

## ✨ Key Features

-   **Instant Context Summary:** Highlight any term (e.g., "quantum tunneling" or "Section 230") and get a popup with a simple explanation, key points, and real-world examples.
-   **AI-Powered:** Utilizes the Google Gemini API to provide intelligent and context-aware summaries.
-   **Clean & Modern UI:** A beautifully styled, non-intrusive popup that looks great on any website.
-   **Easy to Use:** Just highlight and get context. It's that simple.
-   **Secure & Private:** Your API key is stored securely in your browser's local storage and is never transmitted anywhere else. The highlighted text is sent directly to the AI API and is not stored or logged by the extension.

---

## 🚀 Getting Started

Follow these instructions to get Contextify up and running in your own browser.

### Prerequisites

-   Google Chrome
-   A Google Gemini API Key. You can get one from [Google AI Studio](https://aistudio.google.com/).

### Installation

There are two ways to install Contextify:

#### 1. From the Chrome Web Store (Recommended)

*(Once your extension is published, update this section)*

> **Coming Soon!** Contextify will be available on the Chrome Web Store shortly.

#### 2. Manual Installation (For Developers)

If you want to run the extension from the source code:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ZahidHasan7/Contextify-extention-.git
    ```
2.  **Open Chrome Extensions:** Navigate to `chrome://extensions` in your browser.
3.  **Enable Developer Mode:** Turn on the "Developer mode" toggle in the top-right corner.
4.  **Load the extension:** Click the "Load unpacked" button and select the cloned repository folder (`Contextify-Chrome-Extension`).

---

## 🔧 Configuration

To use the extension, you must provide your own Google Gemini API key.

1.  Click the **Contextify icon** in your Chrome toolbar.
2.  A settings popup will appear.
3.  Paste your **Google Gemini API key** into the input field.
4.  Click **"Save Key"**.

The extension is now ready to use! Just highlight text on any webpage to see it in action.

---

## 🛠️ Built With

-   **Manifest V3:** The latest standard for Chrome extensions.
-   **JavaScript:** For all core functionality.
-   **HTML5 & CSS3:** For the popup and options page structure and styling.
-   **[Google Gemini API](https://ai.google.dev/):** The AI model powering the summarizations.
-   **[Marked.js](https://marked.js.org/):** For rendering the AI's Markdown response as beautiful HTML.

---
