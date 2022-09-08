from backend.models import User, Observation, Pool
from backend import app


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
