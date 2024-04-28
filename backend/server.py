from flask import Flask, jsonify, request
from flask_cors import CORS
import PyPDF2, openai, io
from PyPDF2 import PdfReader

from debug import debug_only
from config import debug_status, whitelist_origins
from gpt_utils import test
import logging

app = Flask(__name__)
CORS(app, origins=whitelist_origins)
    
# Just for testing connection with backend; debugging purpose only
@app.route('/test', methods=["GET"]) 
@debug_only
def hello():
    return "Connected!!"


@app.route('/api-call-goes-here', methods=['POST']) 
def autofill():

    html_text = request.form.get('html')
    
    result_dict = test(html_text)

    # For now, return an empty dictionary
    return result_dict, 200

if __name__ == '__main__':
    app.run(debug=debug_status, port=5000) # toggled for prod
