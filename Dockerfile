FROM python:3
COPY ./app.py /deploy/
COPY ./requirements.txt /deploy/
WORKDIR /deploy/
ADD ./Recommend_movies.csv/deploy/
RUN pip install -r requirements.txt
EXPOSE 80
ENTRYPOINT ["python", "app.py"]