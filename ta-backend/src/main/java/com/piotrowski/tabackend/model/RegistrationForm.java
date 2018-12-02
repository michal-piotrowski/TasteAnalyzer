package com.piotrowski.tabackend.model;

/**
 * Created by Michał Piotrowski on 2018-12-02.
 */
public class RegistrationForm {
    private String login;
    private String passwordHash;


    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }
}
