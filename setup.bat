@echo off
echo ========================================
echo LanceaTech Website - Setup Script
echo ========================================
echo.

REM Check Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js not found!
    echo Please install Node.js 18+ from https://nodejs.org/
    pause
    exit /b 1
)

echo [OK] Node.js detected
node --version
echo.

REM Install dependencies
echo Installing dependencies...
echo.
call npm install

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo [SUCCESS] Setup complete!
    echo ========================================
    echo.
    echo Next steps:
    echo   1. Run 'npm run dev' to start dev server
    echo   2. Visit http://localhost:3000
    echo   3. Run 'npm run build' to build for production
    echo.
    echo See README.md for more information
    echo.
) else (
    echo.
    echo [ERROR] Installation failed!
    echo Please check the error messages above.
    echo.
)

pause
