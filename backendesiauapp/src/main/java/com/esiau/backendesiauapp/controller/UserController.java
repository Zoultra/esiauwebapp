package com.esiau.backendesiauapp.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.esiau.backendesiauapp.models.User;
import com.esiau.backendesiauapp.services.UserService;

@RestController

@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/backendesiauapp/v1/")
public class UserController {
    
	@Autowired
	private UserService userService;
	
	 @PostMapping("/user")
		public User createUser(@RequestBody User user) {
			return  userService.save(user);
		}
	 
	 @GetMapping("/user")
	 public Iterable<User> getAllUsers(){
		 return userService.getAllUsers();
	 }
	 
	 @GetMapping("/user/{userId}")
		public User getUser(@PathVariable("userId") final int userId) {
			Optional<User> user = userService.getUserById(userId);
			 
			if(user.isPresent()) {
				return user.get();
			} else {
				return null;
			}
	 

	 }
	 
	 @PutMapping("/user/{userId}")
		public User updateUser(@PathVariable("userId") final int userId, @RequestBody User user) {
			Optional<User> u = userService.getUserById(userId);
			if(u.isPresent()){
				
				User currentUser = u.get();
				
				String nomUser = user.getNomUser();
				if(nomUser != null) {
					currentUser.setNomUser(nomUser);
				} 
				String prenomUser = user.getPrenomUser();
				if(prenomUser != null) {
					currentUser.setPrenomUser(prenomUser);
				}
				String emailUser = user.getEmailUser();
				if(emailUser != null) {
					currentUser.setEmailUser(emailUser);
				}
				String username = user.getUsername();
				if(username != null) {
					currentUser.setUsername(username);
				}
				String password = user.getPassword();
				if(password != null) {
					currentUser.setPassword(password);
				}
				
				String roles = user.getRoles();
				if(roles != null) {
					currentUser.setRoles(roles);
				}
				
				 
				userService.save(currentUser);
				return currentUser;
			} else {
				return null;
			}
		}
	 
	 @DeleteMapping("/user/{userId}")
		public void deleteUserById(@PathVariable("userId") final int userId) {
		 userService.deleteUserById(userId);
		}
	 
	 
}
