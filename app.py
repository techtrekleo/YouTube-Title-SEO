import os
import google.generativeai as genai
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Configure the Gemini API key
try:
    genai.configure(api_key=os.environ["GEMINI_API_KEY"])
except KeyError:
    # This is a fallback for local development if the key is not set.
    # The user will be instructed to set this environment variable.
    print("Warning: GEMINI_API_KEY environment variable not set.")
    pass

# Initialize the Gemini model
model = genai.GenerativeModel('gemini-pro')

@app.route('/generate', methods=['POST'])
def generate_seo_content():
    data = request.get_json()
    if not data:
        return jsonify({"error": "Invalid input"}), 400

    song_name = data.get('songName')
    original_artist = data.get('originalArtist')
    styles = data.get('styles', [])

    if not song_name or not original_artist or not styles:
        return jsonify({"error": "Missing required fields"}), 400

    try:
        # Create the prompt for the AI
        prompt = f"""
        Generate a YouTube video title and keyword tags for a music cover.

        **Instructions:**
        1.  **Title:** Create a descriptive and SEO-friendly title between 30 and 100 characters.
        2.  **Tags:** Generate a list of 50 to 80 relevant keyword tags, including both Chinese and English. The tags should be a single comma-separated string.

        **Video Details:**
        *   **Song Name:** {song_name}
        *   **Original Artist:** {original_artist}
        *   **Cover Style(s):** {', '.join(styles)}

        **Output Format:**
        Return a JSON object with two keys: "title" and "tags".
        Example:
        {{
          "title": "Your Generated Title Here",
          "tags": "tag1, tag2, tag3, ..."
        }}
        """

        response = model.generate_content(prompt)

        # Clean up the response from Gemini, which might include markdown backticks
        clean_response = response.text.strip().replace("```json", "").replace("```", "")

        return clean_response, 200, {'Content-Type': 'application/json'}

    except Exception as e:
        print(f"An error occurred: {e}")
        # In case of an API error, return a more generic error to the user.
        return jsonify({"error": "Failed to generate content from AI service."}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5001)
