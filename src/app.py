from flask import Flask, jsonify, request
from psycopg2 import connect, extras


app = Flask(__name__)


def get_connection():
    return connect(
        host="localhost",
        port=15432,
        database="cac_app",
        user="cac_app",
        password="password",
    )


@app.get("/api/movies")
def get_movies():

    # conectar a la bbdd
    conn = get_connection()
    # crear un cursor -- se encarga de ejecutar las queries
    cursor = conn.cursor(cursor_factory=extras.RealDictCursor)

    # ejecutar la query para obtener registros
    cursor.execute("SELECT * FROM movies")
    movies = cursor.fetchall()

    # cerrar el cursor y la conexión
    cursor.close()
    conn.close()

    # retornar los resultados
    return jsonify(movies)


@app.post("/api/movies")
def create_movie():

    movie_data = request.get_json()

    # conectar a la bbdd
    conn = get_connection()
    # crear un cursor -- se encarga de ejecutar las queries
    cursor = conn.cursor(cursor_factory=extras.RealDictCursor)

    # ejecutar la query para obtener registros
    query = """
    INSERT INTO movies (author_id, description, language, name, rating, release_date)
    VALUES (%s, %s, %s, %s, %s, %s)
    RETURNING *
    """
    cursor.execute(
        query=query,
        vars=(
            movie_data["author_id"],
            movie_data["description"],
            movie_data["language"],
            movie_data["name"],
            movie_data["rating"],
            movie_data["release_date"],
        ),
    )
    movie = cursor.fetchone()
    conn.commit()
    
    # cerrar el cursor y la conexión
    cursor.close()
    conn.close()

    if movie is None:
        return jsonify({"message": "Movie not created"}), 400

    # retornar los resultados
    return jsonify(movie), 201


@app.get("/api/movies/<movie_id>")
def get_movie(movie_id):
    # conectar a la bbdd
    conn = get_connection()
    # crear un cursor -- se encarga de ejecutar las queries
    cursor = conn.cursor(cursor_factory=extras.RealDictCursor)

    # ejecutar la query para obtener registros
    cursor.execute(
        query="SELECT * FROM movies WHERE movie_id = %s", vars=(movie_id,)
    )
    movie = cursor.fetchone()
    # cerrar el cursor y la conexión
    cursor.close()
    conn.close()
    
    if movie is None:
        return jsonify({"message": "Movie not found"}), 404

    # retornar los resultados
    return jsonify(movie)


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
def home(cursor):
    return "Hello, World!"
    


if __name__ == "__main__":
    app.run(debug=True, port=5000, host="0.0.0.0")
