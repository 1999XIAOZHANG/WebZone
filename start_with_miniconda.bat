@echo off
REM This batch file will help you start your Flask web project using Miniconda

REM Check if Miniconda is installed
IF NOT EXIST "%USERPROFILE%\miniconda3\Scripts\activate.bat" (
    ECHO Miniconda is not installed in the default location
    ECHO Please adjust the MINICONDA_PATH variable below
    PAUSE
    EXIT /B 1
)

REM Set Miniconda path (adjust if installed elsewhere)
SET MINICONDA_PATH=%USERPROFILE%\miniconda3

REM Activate Miniconda base environment
ECHO Activating Miniconda environment...
CALL "%MINICONDA_PATH%\Scripts\activate.bat" base

REM Create a new Conda environment for the project (optional but recommended)
ECHO Creating Conda environment for the project...
conda create -n webzone python=3.11 -y

REM Activate the project environment
CALL conda activate webzone

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

REM Set Flask app environment variable (optional)
SET FLASK_APP=app.py

REM Run the Flask app
python app.py

REM Deactivate the Conda environment when done
CALL conda deactivate

PAUSE