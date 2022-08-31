from flask import Flask

app = Flask(__name__)

@app.route("/")
def main():
  return "Hello"

@app.route('/api', methods=["GET"])
def index():
  return {
    "message": "The show",
  }

@app.route("/register")

if __name__ == "__main__":
  app.run(debug=True, host="0.0.0.0")