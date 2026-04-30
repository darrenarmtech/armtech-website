#!/bin/bash
# ARMTECH Website - GitHub Upload Script
# This script helps you upload your website to GitHub Pages

echo "========================================="
echo "ARMTECH Website - GitHub Setup"
echo "========================================="
echo ""

# Step 1: Check if user has Git installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first:"
    echo "   Windows: https://git-scm.com/download/win"
    echo "   Mac: brew install git"
    echo "   Linux: sudo apt-get install git"
    exit 1
fi

echo "✅ Git is installed"
echo ""

# Step 2: Set Git user (you only need to do this once)
echo "Setting up Git user..."
read -p "Enter your email: " email
read -p "Enter your name: " name

git config --global user.email "$email"
git config --global user.name "$name"

echo "✅ Git user configured"
echo ""

# Step 3: Initialize repository
echo "Initializing Git repository..."
git init
git branch -M main
git add .
git commit -m "Initial ARMTECH website upload"

echo "✅ Repository initialized"
echo ""

# Step 4: Ask for GitHub repository URL
echo "Now, go to GitHub and create a new repository:"
echo "1. Go to https://github.com/new"
echo "2. Repository name: armtech-website"
echo "3. Make it PUBLIC"
echo "4. DO NOT add README"
echo "5. Click 'Create repository'"
echo ""

read -p "Enter your GitHub repository URL (e.g., https://github.com/username/armtech-website.git): " repo_url

# Step 5: Connect to GitHub
git remote add origin "$repo_url"
git push -u origin main

echo ""
echo "========================================="
echo "✅ SUCCESS! Your website is uploaded!"
echo "========================================="
echo ""
echo "Next steps:"
echo "1. Go to your repository on GitHub"
echo "2. Click 'Settings'"
echo "3. Click 'Pages' (left sidebar)"
echo "4. Under 'Source', select 'main' branch"
echo "5. Click 'Save'"
echo "6. Wait 2 minutes"
echo "7. Your site will be live!"
echo ""
echo "Your website URL will be:"
echo "https://YOUR-USERNAME.github.io/armtech-website/"
echo ""
