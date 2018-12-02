package com.piotrowski.tabackend.controller;

import com.piotrowski.tabackend.dao.UserDAO;
import com.piotrowski.tabackend.entity.UserData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.lang.annotation.ElementType;
import java.security.Principal;

/**
 * Created by Michał Piotrowski on 2018-11-04.
 */
@RestController
@CrossOrigin
public class loginController {

    private UserDAO userDao;

    @RequestMapping("/login")
    public UserData login(@RequestParam(value = "login", required = false) String login,
                          @RequestParam(value = "password", required = false) String password) {
        return new UserData(login, password);
    }

    @RequestMapping("/")
    public String homePage() {
        return "This is the homepage";
    }

    @RequestMapping(value="/resource", method=RequestMethod.POST)
    public UserData arbitraryUser() {
        return new UserData("myFuckingGod", "howBrilliant");
    }

    @RequestMapping("/user")
    public Principal user(Principal user) {
        return user;
    }

//    @RequestMapping("/register")
//    public void register(@RequestParam("login") String login, @RequestParam("password") String password) {
//        UserData newUser = new UserData(login, password);
//        userDao.save(newUser);
//    }


    public void setUserDao(UserDAO userDao) {
        this.userDao = userDao;
    }

    @Autowired
    public UserDAO getUserDao() {
        return userDao;
    }
}
