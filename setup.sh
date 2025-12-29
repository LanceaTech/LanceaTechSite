#!/bin/bash

echo "🎯 LanceaTech Website - Setup Script"
echo "====================================="
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js 18+ first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version $NODE_VERSION is too old. Please upgrade to v18+."
    exit 1
fi

echo "✅ Node.js $(node -v) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🚀 Next steps:"
    echo "   1. Run 'npm run dev' to start development server"
    echo "   2. Visit http://localhost:3000"
    echo "   3. Run 'npm run build' to build for production"
    echo "   4. See DEPLOYMENT.md for deployment instructions"
    echo ""
    echo "Happy coding! 🎉"
else
    echo "❌ Installation failed. Please check errors above."
    exit 1
fi
