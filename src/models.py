from pydantic import BaseModel


class Movie(BaseModel):
    author_id: int
    description: str
    language: str
    name: str
    rating: float
    release_date: str