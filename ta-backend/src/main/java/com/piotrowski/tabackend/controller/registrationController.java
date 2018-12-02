package com.piotrowski.tabackend.controller;

import com.piotrowski.tabackend.dao.UserDAO;
import com.piotrowski.tabackend.entity.UserData;
import com.piotrowski.tabackend.model.RegistrationForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

/**
 * Created by Michał Piotrowski on 2018-12-02.
 */
@RestController
@CrossOrigin
public class registrationController {

//    @Autowired
    private UserDAO userDao;

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public void register(@ModelAttribute RegistrationForm registrationForm) {
        UserData newUser = new UserData(registrationForm.getLogin(), registrationForm.getPasswordHash());
        userDao.save(newUser);
    }

    @Autowired
    public UserDAO getUserDao() {
        return userDao;
    }
}