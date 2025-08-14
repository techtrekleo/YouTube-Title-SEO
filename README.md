# YouTube SEO Generator

This project is a web application that helps music cover creators generate SEO-friendly YouTube video titles and keyword tags using Google's Gemini AI.

## Features

-   Generate descriptive, SEO-optimized titles (30-100 characters).
-   Generate a comprehensive list of 50-80 Chinese and English keyword tags.
-   Simple interface to input song details and music style.
-   One-click copy for both title and tags.

## How to Use
 
### 1. Prerequisites

-   Python 3.6+
-   An API key for the Google Gemini AI.

### 2. Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install Python dependencies:**
    It's recommended to use a virtual environment.
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    pip install -r requirements.txt
    ```

3.  **Set up your API Key:**
    You need to set your Google Gemini API key as an environment variable.

    **On macOS/Linux:**
    ```bash
    export GEMINI_API_KEY="YOUR_API_KEY"
    ```

    **On Windows:**
    ```bash
    set GEMINI_API_KEY="YOUR_API_KEY"
    ```
    Replace `"YOUR_API_KEY"` with your actual key.

### 3. Running the Application

1.  **Start the Backend Server:**
    Run the Flask application from your terminal:
    ```bash
    python app.py
    ```
    The server will start on `http://127.0.0.1:5001`. Keep this terminal window open.

2.  **Open the Frontend:**
    Open the `index.html` file in your web browser. You can usually do this by double-clicking the file or right-clicking and selecting "Open with" your preferred browser.

### 4. Generating Content

1.  Fill in the "Song Name" and "Original Artist".
2.  Select one or more "Music Style" checkboxes.
3.  Click the "Generate" button.
4.  The AI-generated title and tags will appear below. Use the "Copy" buttons to easily copy the content.
