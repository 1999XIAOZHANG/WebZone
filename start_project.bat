@echo off
REM This batch file will help you start your Flask web project

REM Set Git path (automatically detected as C:\software\Git\bin)
SET GIT_PATH=C:\software\Git\bin

REM Add Python and pip to PATH (adjust if your Python is installed elsewhere)
SET PYTHON_PATH=C:\Users\zhangfan\AppData\Local\Programs\Python\Python311
SET PATH=%PYTHON_PATH%;%PYTHON_PATH%\Scripts;%GIT_PATH%;%PATH%

REM Check if Python is installed
python --version
IF %ERRORLEVEL% NEQ 0 (
    ECHO Python is not installed or not in PATH
    ECHO Please install Python and make sure it's added to your system PATH
    PAUSE
    EXIT /B 1
)

REM Create a virtual environment (optional but recommended)
ECHO Creating Python virtual environment...
python -m venv venv

REM Activate the virtual environment
CALL venv\Scripts\activate.bat

REM Install required dependencies
ECHO Installing project dependencies...
pip install -r requirements.txt

REM Check if installation was successful
IF %ERRORLEVEL% NEQ 0 (
    ECHO Failed to install dependencies
    ECHO Please check your internet connection and try again
    PAUSE
    EXIT /B 1
)

REM Start the Flask application
ECHO Starting Flask application...
ECHO Your website will be available at http://localhost:5000
ECHO Press Ctrl+C to stop the server
python app.py

REM Deactivate the virtual environment when done (this line will run after server is stopped)
CALL venv\Scripts\deactivate.bat

PAUSE