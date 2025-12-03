#!/bin/bash

# Docker build script for MarkTechRover Website
# This script builds an optimized Docker image

set -e

echo "🐳 Building MarkTechRover Website Docker Image..."
echo "================================================="

# Build the Docker image
echo "📦 Building Docker image (this may take a few minutes)..."
docker build -t marktechrover-website:latest .

echo ""
echo "✅ Docker image built successfully!"
echo ""

# Show image size
echo "📊 Image size:"
docker images marktechrover-website:latest --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}"

echo ""
echo "🚀 To run the container, use one of these commands:"
echo ""
echo "   Using Docker Compose (recommended):"
echo "   $ docker-compose up -d"
echo ""
echo "   Using Docker directly:"
echo "   $ docker run -d -p 5174:80 --name marktechrover-web marktechrover-website:latest"
echo ""
echo "   Then access the website at: http://localhost:5174"
echo ""

