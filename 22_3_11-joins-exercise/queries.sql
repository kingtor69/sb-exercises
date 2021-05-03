-- write your queries here
-- show all
SELECT * 
    FROM owners o
    LEFT JOIN  vehicles v
    ON v.owner_id = o.id;

-- cars/owner
SELECT first_name, last_name, COUNT(v.owner_id) AS cars_owned
    FROM owners o
    JOIN vehicles v
    ON v.owner_id = o.id
    GROUP BY o.id 
    ORDER BY cars_owned;

-- best sellers
SELECT first_name, last_name, 
        ROUND(AVG(price)) AS avg_price, 
        COUNT(owner_id) AS sales
    FROM owners o 
    JOIN vehicles v 
        ON o.id = v.owner_id
    GROUP BY (first_name, last_name)
    HAVING COUNT(owner_id) > 1 AND AVG(price) > 10000
    ORDER BY sales desc;