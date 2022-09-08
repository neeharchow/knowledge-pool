from backend.models import User, Observation, Pool
from backend import app, bcrypt, db
import requests

@app.route("/")
def main():
    return "Hello"


@app.route('/register', methods=["GET", "PUT"])
def reigster():
    username = requests.json['username']
    email = requests.json['email']
    password = requests.json['password']
    
    hashed_password = bcrypt.generate_password_hash


@app.route('/api', methods=["GET"])
def index():
    return {
        "message": "The show",
    }


@app.route("/register")
def register():
    pass
