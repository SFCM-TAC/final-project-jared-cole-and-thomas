#!/bin/bash
cd $(dirname $0)
echo "Go to http://localhost:8000 in your browser."
python -m SimpleHTTPServer 8000
