package com.esiau.backendesiauapp.services;

import java.util.List;
import java.util.Optional;


import com.esiau.backendesiauapp.models.User;

public interface UserService {
	
	public User save(User user) ;
	
	public User update(User user);
	
	public List<User> getAllUsers();
	
    void deleteUserById(int userId);
    
    Optional<User> getUserById(int userId);

}
