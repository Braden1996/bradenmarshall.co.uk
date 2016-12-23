# BradenMarshall.co.uk
## Introduction
This is the entire project which is my personal website.

## Getting Started
Note: the following instructions are for Linux Bash. Other platforms may vary.
1. Clone Git repository and `cd` into directory.
2. Setup Python virtual environment: `python -m venv venv_bradenmarshall`
3. Invoke virtual environment script: `source ./venv_bradenmarshall/bin/activate`
4. Download and install Python dependencies: `pip install -r requirements.txt`
5. Install global Node dependecies: `sudo npm install --global gulp-cli`
6. Install remaining Node dependecies: `npm install`
7. Transpile all our assets: `gulp`
8. `cd` into `src` directory: `cd ./src`
9. Make Django model migrations: `python manage.py migrate`
10. Host website using Django's development server: `python manage.py runserver`
11. Visit `127.0.0.1:8000` in browser.