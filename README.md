# PostgreSQL-Queries-and-Relationships

## Assignment Overview  

Imagine you're working at a game studio, and your team has built a database to track the players and their activities. You’ve been asked to help generate some reports from the database. You'll use the skills you’ve learned to filter, join, and analyze the data to answer some questions. 


## Database Structure  

In this assignment, you will use the following tables:  

- players 
- games 
- scores 


 
    1.  Players table: Information about players. 
        - id (INTEGER, Primary Key) 
        - name (VARCHAR) 
        - join_date (DATE) 
    2.  Games table: Details of games available. 
        - id (INTEGER, Primary Key) 
        - title (VARCHAR) 
        - genre (VARCHAR) 
    3.  Scores table: Tracks scores of players in different games. 
        - id (INTEGER, Primary Key) 
        - player_id (INTEGER, Foreign Key to players) 
        - game_id (INTEGER, Foreign Key to games) 
        - score (INTEGER) 
        - date_played (DATE)


## The Challenges  

### Task 1: List All Players and Their Scores  

### Task 2: Find High Scorers  

### Task 3: Players Who Didn’t Play Any Games  

### Task 4: Find Popular Game Genres  

### Task 5: Recently Joined Players  

### Bonus Task: Players' Favorite Games  
