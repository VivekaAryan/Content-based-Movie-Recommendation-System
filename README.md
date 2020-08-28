# Content-based-Movie-Recommendation-System

![Python](https://img.shields.io/badge/Python-3.8-lightblue)
![Framework](https://img.shields.io/badge/Framework-Flask-red)
![Frontend](https://img.shields.io/badge/Frontend-HTML/CSS/JS-green)
![API](https://img.shields.io/badge/API-TMDB-fcba03)
![Deploy](https://img.shields.io/badge/Deploy-Heroku-violet)

This content based model recommends top 10 similar movies arranged in the descending order of weighted scores, based on a particular movie. This system uses movie metadata, such as genre, director, keywords, actors for movies, to make these recommendations. 

Link to the web app: https://cb-movierecommendations.herokuapp.com/

# Data
The data was taken from https://grouplens.org/datasets/movielens/.

# Weighted Rating Formula
The IMDB weighted rating formula is used as 'Score' to regularize the the rating metric.

![IMDB Score](https://wikimedia.org/api/rest_v1/media/math/render/svg/066fb66cb005a83525f3c219266fababaa26f968)
