from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

import os

app = Flask(__name__)

app.config["SECRET_KEY"] = "pogchampsecret"
app.config["SQLALCHEMY_DATABASE_URI"] = f"postgres://postgres:{os.environ['POSTGRES_PASSWORD']}@postgres:5432/${os.environ['POSTGRES_DB']}"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    observations = db.relationship('Observation', backref="author", lazy=True)


class Observation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String, nullable=True)


db.create_all()


@app.route("/")
def main():
    return "Hello"


@app.route('/api', methods=["GET"])
def index():
    return {
        "message": "The show",
    }


@app.route("/register")
def register():
    pass


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
