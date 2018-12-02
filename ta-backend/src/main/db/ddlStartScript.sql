CREATE SCHEMA tasteAnalyzer;
set search_path to tasteAnalyzer;
CREATE DATABASE TasteAnalyzer;

CREATE TABLE public.Users
(
    id serial PRIMARY KEY NOT NULL,
    login varchar(50) NOT NULL,
    password varchar(50) NOT NULL,
    name varchar(50),
    surname varchar(50),
    isSurnameVisible boolean DEFAULT false ,
    spotifyAccessToken VARCHAR(255),
    spotifyRefreshToken Varchar(255)
);
CREATE UNIQUE INDEX Users_id_uindex ON public.Users (id);
CREATE UNIQUE INDEX Users_login_uindex ON public.Users (login);


