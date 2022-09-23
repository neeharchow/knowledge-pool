from datetime import datetime
from backend import db


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)
    date_created = db.Column(
        db.DateTime, nullable=False, default=datetime.utcnow)

    observations = db.relationship(
        'Observation', backref="author", lazy=True)
    pools = db.relationship('Pool', backref="author", lazy=True)

    def __repr__(self) -> str:
        return f"User: {self.username}, {self.email}"


class Observation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.Text, nullable=False)

    # pools = db.relationship('Pool', backref="pool", lazy=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def __repr__(self):
        return f"User: {self.id}, number of pools: {self.pools.length}"

class Pool(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.Text, nullable=False)

    # observations = db.relationship('Pool', backref="pool", lazy=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
