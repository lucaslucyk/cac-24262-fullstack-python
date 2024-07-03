FROM python:3.10-alpine

WORKDIR /app

COPY ./requirements.txt /app
RUN pip install -r requirements.txt

COPY ./src /app

# CMD ["python", "app.py"]
CMD ["gunicorn", "--config", "gconfig.py", "app:app"]