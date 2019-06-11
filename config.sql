-- CREATE TABLE categories(
--     id SERIAL PRIMARY KEY,
--     name varchar(50)
-- );

-- CREATE TABLE restaurants(
--     id SERIAL PRIMARY KEY,
--     name varchar(50),
--     category integer REFERENCES categories(id)
-- );

-- --seeds
-- INSERT INTO categories VALUES
-- (DEFAULT, 'thai'), 
-- (DEFAULT, 'BBQ'), 
-- (DEFAULT, 'chinese'), 
-- (DEFAULT, 'ethiopian'), 
-- (DEFAULT, 'greek'), 
-- (DEFAULT, 'italian'), 
-- (DEFAULT, 'french'), 
-- (DEFAULT, 'american'), 
-- (DEFAULT, 'korean'), 
-- (DEFAULT, 'mexican'); 

-- INSERT INTO restaurants VALUES
-- (DEFAULT, 'fajitas', 10),
-- (DEFAULT, 'pad thai', 1),
-- (DEFAULT, 'patechou', 7),
-- (DEFAULT, 'kim chi', 9),
-- (DEFAULT, 'hot dogs', 8),
-- (DEFAULT, 'stinky tofu', 3),
-- (DEFAULT, 'ribs', 2),
-- (DEFAULT, 'kabobs', 5),
-- (DEFAULT, 'spaghetti', 6),
-- (DEFAULT, 'shriro wett', 6);


-- ALTER TABLE restaurants
-- ADD foodDescription varchar(300);

-- ALTER TABLE restaurants
-- ADD price integer;

-- ALTER TABLE restaurants
-- ADD course varchar(50);

-- ALTER TABLE restaurants
-- ADD imageURL varchar;
