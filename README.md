# TheForceApi

## Consuming the API

### Movies

#### Endpoint to fetch information about a single movie
**endpoint**: GET /movies/:movieId<br>
**response sample**:
```json
{
  "success": true,
  "code": 200,
  "message": "Film returned",
  "data": {
    "title": "Attack of the Clones",
    "opening_crawl": "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....",
    "release_date": "2002-05-16",
    "comment_count": 3
  }
}
```

<hr>

### Endpoint to return a list of movies
NOTE: movieId is not the same as episode_id returned in movie list<br>
**endpoint**: GET /movies<br>
**response sample**:

```json
{
  "success": true,
  "code": 200,
  "message": "Films returned",
  "data": [
    {
      "title": "A New Hope",
      "episode_id": 4,
      "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
      "director": "George Lucas",
      "producer": "Gary Kurtz, Rick McCallum",
      "release_date": "1977-05-25",
      "characters": [
        "http://swapi.dev/api/people/1/",
        "http://swapi.dev/api/people/2/",
        "http://swapi.dev/api/people/3/",
        "http://swapi.dev/api/people/4/",
        "http://swapi.dev/api/people/5/",
        "http://swapi.dev/api/people/6/",
        "http://swapi.dev/api/people/7/",
        "http://swapi.dev/api/people/8/",
        "http://swapi.dev/api/people/9/",
        "http://swapi.dev/api/people/10/",
        "http://swapi.dev/api/people/12/",
        "http://swapi.dev/api/people/13/",
        "http://swapi.dev/api/people/14/",
        "http://swapi.dev/api/people/15/",
        "http://swapi.dev/api/people/16/",
        "http://swapi.dev/api/people/18/",
        "http://swapi.dev/api/people/19/",
        "http://swapi.dev/api/people/81/"
      ],
      "planets": [
        "http://swapi.dev/api/planets/1/",
        "http://swapi.dev/api/planets/2/",
        "http://swapi.dev/api/planets/3/"
      ],
      "starships": [
        "http://swapi.dev/api/starships/2/",
        "http://swapi.dev/api/starships/3/",
        "http://swapi.dev/api/starships/5/",
        "http://swapi.dev/api/starships/9/",
        "http://swapi.dev/api/starships/10/",
        "http://swapi.dev/api/starships/11/",
        "http://swapi.dev/api/starships/12/",
        "http://swapi.dev/api/starships/13/"
      ],
      "vehicles": [
        "http://swapi.dev/api/vehicles/4/",
        "http://swapi.dev/api/vehicles/6/",
        "http://swapi.dev/api/vehicles/7/",
        "http://swapi.dev/api/vehicles/8/"
      ],
      "species": [
        "http://swapi.dev/api/species/1/",
        "http://swapi.dev/api/species/2/",
        "http://swapi.dev/api/species/3/",
        "http://swapi.dev/api/species/4/",
        "http://swapi.dev/api/species/5/"
      ],
      "created": "2014-12-10T14:23:31.880000Z",
      "edited": "2014-12-20T19:49:45.256000Z",
      "url": "http://swapi.dev/api/films/1/"
    }
  ]
}
```

<hr>

### Comments

#### Endpoint to get information about comments
**endpoint**: POST /comments/:movieId<br>
NOTE: movieId parameter specified here is not the same as episode_id returned with the list of movies<br>
**payload content**: movieId, comment<br>
**payload type**: json<br>
**payload sample**: 
```json
{
	"movieId": "4",
    "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu pretium est. Ut congue arcu est, non vehicula arcu consectetur a. Nulla gravida, tellus eu tincidunt dapibus, odio ante pulvinar tellus, in tempus erat leo pharetra tortor. Donec tristique pulvinar dui, eget pretium magna finibus vel. Interdum et malesuada fames ac ante ipsum primis in faucibus."
}
```
#### Endpoint to return all comments for a single movie
**endpoint**: GET /comments/:movieId<br>
**response sample**:
```json
{
  "success": true,
  "code": 200,
  "message": "Comments returned",
  "data": [
    {
      "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu pretium est. Ut congue arcu est, non vehicula arcu consectetur a. Nulla gravida, tellus eu tincidunt dapibus, odio ante pulvinar tellus, in tempus erat leo pharetra tortor. Donec tristique pulvinar dui, eget pretium magna finibus vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque sed condimentum risus, sed scelerisque nunc. Nulla ultrices est at venenatis feugiat. Quisque vel metus dignissim, lacinia lorem al",
      "public_ip": "::1",
      "created_at": "2020-09-12T13:55:51.000Z"
    },
    {
      "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu pretium est. Ut congue arcu est, non vehicula arcu consectetur a. Nulla gravida, tellus eu tincidunt dapibus, odio ante pulvinar tellus, in tempus erat leo pharetra tortor. Donec tristique pulvinar dui, eget pretium magna finibus vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque sed condimentum risus, sed scelerisque nunc. Nulla ultrices est at venenatis feugiat. Quisque vel metus dignissim, lacinia lorem al",
      "public_ip": "::1",
      "created_at": "2020-09-12T13:33:13.000Z"
    }
  ]
}
```
<hr>

### Characters

#### Endpoint to return a list of movie characters 
**endpoint**: GET /characters<br>
**query parameters**: sort_by, gender, sort_type, page_number. All parameters are optional.<br>

* `sort_by` specifies what the parameter data should be sorted by. It takes two possible values, `name` or `height`. <br>
* `gender` takes two possible values, `male` or `female`. <br>
* `sort_type` allows the data to be arranged in either ascending or descending order. It takes two possible values, `asc` or `desc`. <br>
* `page_number` specifies the page number of the character list to be returned<br>

**request sample**
```
/character?sort_by=name&sort_type=desc&page_number=8&gender=female
```
**response sample**: 
```json
{
  "success": true,
  "code": 200,
  "message": "Characters data returned",
  "data": {
    "record_count": 4,
    "totalHeightcm": 654,
    "totalHeightft": 21.4566936,
    "data": [
      {
        "name": "Taun We",
        "height": "213",
        "mass": "unknown",
        "hair_color": "none",
        "skin_color": "grey",
        "eye_color": "black",
        "birth_year": "unknown",
        "gender": "female",
        "homeworld": "http://swapi.dev/api/planets/10/",
        "films": [
          "http://swapi.dev/api/films/5/"
        ],
        "species": [
          "http://swapi.dev/api/species/32/"
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-20T17:31:21.195000Z",
        "edited": "2014-12-20T21:17:50.474000Z",
        "url": "http://swapi.dev/api/people/73/"
      },
      {
        "name": "Shaak Ti",
        "height": "178",
        "mass": "57",
        "hair_color": "none",
        "skin_color": "red, blue, white",
        "eye_color": "black",
        "birth_year": "unknown",
        "gender": "female",
        "homeworld": "http://swapi.dev/api/planets/58/",
        "films": [
          "http://swapi.dev/api/films/5/",
          "http://swapi.dev/api/films/6/"
        ],
        "species": [
          "http://swapi.dev/api/species/35/"
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-20T18:44:01.103000Z",
        "edited": "2014-12-20T21:17:50.486000Z",
        "url": "http://swapi.dev/api/people/78/"
      },
      {
        "name": "R4-P17",
        "height": "96",
        "mass": "unknown",
        "hair_color": "none",
        "skin_color": "silver, red",
        "eye_color": "red, blue",
        "birth_year": "unknown",
        "gender": "female",
        "homeworld": "http://swapi.dev/api/planets/28/",
        "films": [
          "http://swapi.dev/api/films/5/",
          "http://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-20T17:43:36.409000Z",
        "edited": "2014-12-20T21:17:50.478000Z",
        "url": "http://swapi.dev/api/people/75/"
      },
      {
        "name": "Jocasta Nu",
        "height": "167",
        "mass": "unknown",
        "hair_color": "white",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "unknown",
        "gender": "female",
        "homeworld": "http://swapi.dev/api/planets/9/",
        "films": [
          "http://swapi.dev/api/films/5/"
        ],
        "species": [
          "http://swapi.dev/api/species/1/"
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-20T17:32:51.996000Z",
        "edited": "2014-12-20T21:17:50.476000Z",
        "url": "http://swapi.dev/api/people/74/"
      }
    ]
  }
}
```





