from flask import Flask, jsonify, request, send_file
from psycopg2 import connect, extras
from psycopg2.errors import UniqueViolation
import os

from pydantic import ValidationError

from models import Movie


app = Flask(__name__)


def get_connection():

    if os.environ.get("DATABASE_URL", None):
        print(os.environ.get("DATABASE_URL"))
        return connect(os.environ.get("DATABASE_URL"))

    return connect(
        host=os.environ.get("DB_HOST", "localhost"),
        port=int(os.environ.get("DB_PORT", "15432")),
        database=os.environ.get("DB_NAME", "cac_app"),
        user=os.environ.get("DB_USER", "cac_app"),
        password=os.environ.get("DB_PASSWORD", "password"),
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

    try:
        valid_data = Movie.model_validate(movie_data)
    except ValidationError as e:
        return jsonify({"message": e.errors() }), 400

    # conectar a la bbdd
    try:
        conn = get_connection()
    except:
        return jsonify({"message": "Database connection error"}), 500

    # crear un cursor -- se encarga de ejecutar las queries
    cursor = conn.cursor(cursor_factory=extras.RealDictCursor)

    # ejecutar la query para obtener registros
    query = """
    INSERT INTO movies (author_id, description, language, name, rating, release_date)
    VALUES (%s, %s, %s, %s, %s, %s)
    RETURNING *
    """

    try:
        cursor.execute(
            query=query,
            vars=(
                valid_data.author_id,
                valid_data.description,
                valid_data.language,
                valid_data.name,
                valid_data.rating,
                valid_data.release_date,
                
                # movie_data["author_id"],
                # movie_data["description"],
                # movie_data["language"],
                # movie_data["name"],
                # movie_data["rating"],
                # movie_data["release_date"],
            ),
        )
        movie = cursor.fetchone()
        conn.commit()

        if movie is None:
            return jsonify({"message": "Movie not created"}), 400

        # retornar los resultados
        return jsonify(movie), 201
    except UniqueViolation:
        return jsonify({"message": "Movie already exists"}), 409

    finally:
        # cerrar el cursor y la conexión
        cursor.close()
        conn.close()


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
    # conectar a la bbdd
    conn = get_connection()
    # crear un cursor -- se encarga de ejecutar las queries
    cursor = conn.cursor(cursor_factory=extras.RealDictCursor)

    # ejecutar la query para obtener registros
    cursor.execute(
        query="DELETE FROM movies WHERE movie_id = %s RETURNING *",
        vars=(movie_id,),
    )
    movie = cursor.fetchone()
    conn.commit()
    # cerrar el cursor y la conexión
    cursor.close()
    conn.close()

    if movie is None:
        return jsonify({"message": "Movie not found"}), 404

    # retornar los resultados
    return jsonify(movie)


# PUT / PATCH
@app.patch("/api/movies/<movie_id>")
def update_movie(movie_id):
    return {"title": "Spiderman 2", "year": 2002, "id": movie_id}


@app.put("/api/movies/<movie_id>")
def update_movie_put(movie_id):

    movie_data = request.get_json()

    # conectar a la bbdd
    conn = get_connection()
    # crear un cursor -- se encarga de ejecutar las queries
    cursor = conn.cursor(cursor_factory=extras.RealDictCursor)

    # ejecutar la query para obtener registros
    query = """
    UPDATE movies
    SET
        author_id = %s,
        description = %s,
        language = %s,
        name = %s,
        rating = %s,
        release_date = %s
    WHERE movie_id = %s
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
            movie_id,
        ),
    )
    movie = cursor.fetchone()
    conn.commit()

    # cerrar el cursor y la conexión
    cursor.close()
    conn.close()

    if movie is None:
        return jsonify({"message": "Movie not found"}), 404

    # retornar los resultados
    return jsonify(movie)


@app.get("/")
def home():
    return send_file("static/index.html")


@app.route("/images", methods=["GET", "POST"])
def images():

    if request.method == "GET":
        return send_file("static/images.html")

    if request.method == "POST":
        file = request.files["image"]
        file.save(f'static/uploads/{file.name}.{file.filename.split(".")[-1]}')
        return jsonify({"message": "ok"}), 200


if __name__ == "__main__":
    app.run(debug=True, port=5000, host="0.0.0.0")
