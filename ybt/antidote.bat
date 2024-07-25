@echo off
title Antitode
cls
:top
taskkill /im wscript.exe /f
if %errorlevel% neq 0 (
  exit
)
taskkill /im powershell.exe /f
if %errorlevel% neq 0 (
  exit
)
goto top