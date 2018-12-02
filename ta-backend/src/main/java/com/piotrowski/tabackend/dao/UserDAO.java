package com.piotrowski.tabackend.dao;

import com.piotrowski.tabackend.entity.UserData;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Michał Piotrowski on 2018-11-21.
 */
public interface UserDAO extends CrudRepository<UserData, Integer> {

//    public void createUser(String login, String password);

}
