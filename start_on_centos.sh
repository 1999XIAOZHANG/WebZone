#!/bin/bash
# This bash script will help you start your Flask web project on CentOS

# Exit on error
set -e

# Function to print colored messages
print_green() {
    echo -e "\033[0;32m$1\033[0m"
}

print_yellow() {
    echo -e "\033[1;33m$1\033[0m"
}

print_red() {
    echo -e "\033[0;31m$1\033[0m"
}

# Check if Miniconda is available
if ! command -v conda &> /dev/null; then
    print_red "Miniconda is not available in PATH"
    print_red "Please activate Miniconda first or add it to your PATH"
    exit 1
fi

# Step 1: Create a Python virtual environment (optional but recommended)
print_yellow "Step 1: Creating a Python virtual environment..."
conda create -n webzone python=3.11 -y

# Step 2: Activate the virtual environment
print_yellow "\nStep 2: Activating the virtual environment..."
conda activate webzone

# Step 3: Install required dependencies
print_yellow "\nStep 3: Installing project dependencies..."
pip install -r requirements.txt

# Step 4: Set Flask app environment variable
print_yellow "\nStep 4: Configuring Flask environment..."
export FLASK_APP=app.py
export FLASK_ENV=development

# Step 5: Start the Flask application
print_yellow "\nStep 5: Starting Flask application..."
print_green "Your website will be available at http://localhost:5000"
print_green "Press Ctrl+C to stop the server"

python app.py

# Step 6: Deactivate the virtual environment when done (this line will run after server is stopped)
print_yellow "\nStep 6: Deactivating the virtual environment..."
conda deactivate

print_green "\nServer stopped successfully."