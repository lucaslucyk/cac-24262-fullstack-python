from flask import Flask


app = Flask(__name__)


@app.get("/api/movies")
def get_movies():
    return [
        {"title": "Spiderman", "year": 2002},
        {"title": "Spiderman 2", "year": 2004},
    ]


@app.post("/api/movies")
def create_movie():
    return {"title": "Spiderman", "year": 2002}


@app.get("/api/movies/<movie_id>")
def get_movie(movie_id):
    return {"title": "Spiderman", "year": 2002, "id": movie_id}


@app.delete("/api/movies/<movie_id>")
def delete_movie(movie_id):
    return {"title": "Spiderman 2", "year": 2002, "id": movie_id}


# PUT / PATCH
@app.patch("/api/movies/<movie_id>")
def update_movie(movie_id):
    return {"title": "Spiderman 2", "year": 2002, "id": movie_id}


@app.put("/api/movies/<movie_id>")
def update_movie_put(movie_id):
    return {"title": "Spiderman 2", "year": 2002, "id": movie_id}


@app.get("/")
def home():
    return "Hello, World!"


if __name__ == "__main__":
    app.run(debug=True, port=5000)
