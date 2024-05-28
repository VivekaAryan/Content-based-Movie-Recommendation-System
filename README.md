# Content-based-Movie-Recommendation-System

![Python](https://img.shields.io/badge/Python-3.8-lightblue)
![Framework](https://img.shields.io/badge/Framework-Flask-red)
![Frontend](https://img.shields.io/badge/Frontend-HTML/CSS/JS-green)
![API](https://img.shields.io/badge/API-TMDB-fcba03)
![Deploy](https://img.shields.io/badge/Deploy-Heroku-violet)

This content based model recommends top 10 similar movies arranged in the descending order of weighted scores, based on a particular movie. This system uses movie metadata, such as genre, director, keywords, actors for movies, to make these recommendations. 

Link to the web app: https://cb-movierecommendations.herokuapp.com/

## Data
The data was taken from https://grouplens.org/datasets/movielens/.

## TMDB API
The details of each movie is web scrapped from [TMDB wesite](https://www.themoviedb.org/) by interacting with the API.

## Weighted Rating Formula
The IMDB weighted rating formula is used as 'Score' to regularize the the rating metric.

![IMDB Score](https://wikimedia.org/api/rest_v1/media/math/render/svg/066fb66cb005a83525f3c219266fababaa26f968)

where:  
W  = weighted rating  
R = average for the movie as a number from 1 to 10 (mean) = (Rating)  
v  = number of votes for the movie = (votes)  
m  = minimum votes required to be listed (currently 78)  
C  = the mean vote across the whole report (currently 6.0)  

## Measuring Text similarity
### Euclidean Distance
Euclidean distance measures the straight-line distance between two vectors in Euclidean space. It might not be as effective for text similarity since it considers the magnitude of the vectors.

### Cosine Similarity  
To get the recommendations, I computed pairwise cosine similarity scores for all movies based on their plot descriptions and recommended movies based on that similarity score threshold.  
The definition of similarity between two vectors u and v is, in fact, the ratio between their dot product and the product of their magnitudes. The cosine similarity is advantageous because even if the two similar documents are far apart by the Euclidean distance (due to the size of the document), chances are they may still be oriented closer together. The smaller the angle, higher the cosine similarity. 
By applying the definition of similarity, this will be in fact equal to 1 if the two vectors are identical, and it will be 0 if the two are orthogonal. In other words, the similarity is a number bounded between 0 and 1 that tells us how much the two vectors are similar.  
![Cosine](https://miro.medium.com/max/700/1*r5ULMbx7ju3_Y4TU1PJIyQ.png)

### Jaccard Distance

The Jaccard Distance is a measure of dissimilarity between two sets. It is calculated as one minus the Jaccard Index. The Jaccard Index measures the similarity between two sets by dividing the size of the intersection by the size of the union of the sets.

#### Definition

For two sets \( A \) and \( B \), the Jaccard Distance is defined as:

Jaccard Distance(A, B) = 1 - |A ∩ B| / |A ∪ B|

Where:
- \( |A ∩ B| \) is the number of elements in the intersection of sets \( A \) and \( B \).
- \( |A ∪ B| \) is the number of elements in the union of sets \( A \) and \( B \).

#### Usage

Jaccard Distance is often used in clustering and classification tasks where the data can be represented as sets. It is particularly useful for comparing binary or categorical data.

​

