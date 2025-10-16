# School Management System

## Setup guide

1. Head to the github [repository](https://github.com/Frank-incense/schoolmanagementsystem).

2. Clone the repository to your local machine.

```
    git clone git@github.com:Frank-incense/schoolmanagementsystem.git
```
3. Navigate to the cloned folder and setup the environment.
```
    python3 -m venv .venv
    source .venv/bin/activate
    npm install --prefix client
    pip install -r requirements.txt
```
4. Create your `.env` 
```
    touch .env
```
5. Create a database.
```
    createdb -U <username> -d <databasename>
```
6.Add the environment variables.
```
    FLASK_APP=server/app.py
    FLASK_RUN_PORT=5555
    FLASK_SQLALCHEMY_DATABASE_URI=postgresql://http://127.0.0.1:port/username:password/databasename
    FLASK_ENV=development
    FLASK_DEBUG=1   
```
7. Upgrade the database.
```
    flask db upgrade
```
8. Run the application.
```
    flask run
    npm run dev --prefix client/
```