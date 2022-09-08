from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)

app.config["SECRET_KEY"] = "pogchampsecret"
app.config["SQLALCHEMY_DATABASE_URI"] = f"postgres://postgres:{os.environ['POSTGRES_PASSWORD']}@postgres:5432/${os.environ['POSTGRES_DB']}"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

from backend import routes