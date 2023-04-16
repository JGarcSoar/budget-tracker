CREATE TABLE your_budget(
    budget_id SERIAL PRIMARY KEY,
    current_budget numeric(19,4)
)
--set extension
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

--Insert users
Insert into users (user_name, user_email, user_password) 
values ('Gary', 'Schreck@net.com', 'password');