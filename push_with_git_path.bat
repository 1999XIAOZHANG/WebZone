@echo off
REM This batch file will set Git path and push your project to GitHub

REM Set Git path (automatically detected as C:\software\Git\bin)
SET GIT_PATH=C:\software\Git\bin

REM Add Git to PATH
SET PATH=%GIT_PATH%;%PATH%

REM Verify Git installation
ECHO Checking Git installation...
git --version
IF %ERRORLEVEL% NEQ 0 (
    ECHO Git not found at %GIT_PATH%
    ECHO Please modify the GIT_PATH variable in this file to match your Git installation path
    PAUSE
    EXIT /B 1
)

REM Set credential cache timeout to 1 hour
ECHO Setting Git credential cache...
git config --global credential.helper "cache --timeout=3600"

REM Try to push to GitHub
ECHO Trying to push to GitHub...
git push -u origin master

IF %ERRORLEVEL% EQU 0 (
    ECHO Successfully pushed to GitHub!
    ECHO You can visit your repository at: https://github.com/1999XIAOZHANG/WebZone.git
) ELSE (
    ECHO Push failed!
    ECHO If you're using two-factor authentication, please use a Personal Access Token (PAT) as your password.
    ECHO To create a PAT, visit: https://github.com/settings/tokens
    ECHO Make sure to select the 'repo' scope for full access to private repositories.
)

PAUSE