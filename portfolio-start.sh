#!/bin/bash

echo "🐶 Starting Smita's Portfolio..."
echo "📍 Location: /Users/smitakulkarni/smita-portfolio"
echo "🌐 Opening at: http://localhost:3000"
echo ""

cd /Users/smitakulkarni/smita-portfolio

# Kill any existing processes on port 3000
lsof -ti:3000 | xargs kill -9 2>/dev/null

# Start the portfolio
echo "🚀 Launching React development server..."
npm start