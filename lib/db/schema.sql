DROP TABLE IF EXISTS Watchlist;

CREATE TABLE Watchlist(
  id SERIAL PRIMARY KEY,
  hashtag varchar(250)
  -- TODO: Add CardID to database
)
