import os
import logging
import json
import google.generativeai as genai
from flask import Flask, request, jsonify, send_from_directory

# Configure basic logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

app = Flask(__name__)

# Configure the Gemini API key
try:
    genai.configure(api_key=os.environ["GEMINI_API_KEY"])
except KeyError:
    logging.warning("GEMINI_API_KEY environment variable not set. The application will not work without it.")
    pass

# Initialize the Gemini model
model = genai.GenerativeModel('gemini-pro')

@app.route('/')
def serve_index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    if path in ['script.js', 'style.css']:
        return send_from_directory('.', path)
    return send_from_directory('.', 'index.html')


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
        # Clean up the response to ensure it's valid JSON
        clean_response_text = response.text.strip().replace("```json", "").replace("```", "").strip()

        # Parse the JSON string into a Python dictionary
        response_data = json.loads(clean_response_text)

        # Return the data as a proper JSON response
        return jsonify(response_data)

    except json.JSONDecodeError as e:
        logging.error(f"Failed to parse JSON from AI response: {clean_response_text}", exc_info=True)
        return jsonify({"error": "Failed to parse response from AI service."}), 500
    except Exception as e:
        # Use logging to ensure the error is captured by Gunicorn/Railway
        logging.error(f"Failed to generate content from AI service.", exc_info=True)
        return jsonify({"error": "Failed to generate content from AI service."}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5001))
    app.run(host='0.0.0.0', port=port)
