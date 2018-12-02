package com.piotrowski.tabackend.entity;

import javax.persistence.*;

/**
 * Created by Michał Piotrowski on 2018-11-04.
 */
@Entity
@Table(name = "Users")
public class UserData extends AuditModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private String id;
    private String login;
    private String password;
    private String name;
    private String surname;
    private boolean isSurnameVisible;
    private String spotifyAccessToken;
    private String spotifyRefreshToken;


    public UserData() {

    }

    public UserData(String login, String password) {
        this.login = login;
        this.password = password;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public boolean isSurnameVisible() {
        return isSurnameVisible;
    }

    public void setSurnameVisible(boolean surnameVisible) {
        isSurnameVisible = surnameVisible;
    }

    public String getSpotifyAccessToken() {
        return spotifyAccessToken;
    }

    public void setSpotifyAccessToken(String spotifyAccessToken) {
        this.spotifyAccessToken = spotifyAccessToken;
    }

    public String getSpotifyRefreshToken() {
        return spotifyRefreshToken;
    }

    public void setSpotifyRefreshToken(String spotifyRefreshToken) {
        this.spotifyRefreshToken = spotifyRefreshToken;
    }
}
