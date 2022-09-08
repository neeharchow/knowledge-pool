from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
import os

app = Flask(__name__)

app.config["SECRET_KEY"] = "pogchampsecret"
app.config["SQLALCHEMY_DATABASE_URI"] = f"postgres://postgres:{os.environ['POSTGRES_PASSWORD']}@postgres:5432/${os.environ['POSTGRES_DB']}"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)

from backend import routes