package com.esiau.backendesiauapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esiau.backendesiauapp.dao.UserRepository;
import com.esiau.backendesiauapp.models.User;

@Service
public class UserServiceImpl implements UserService {
    
	@Autowired
	private UserRepository userRepository;
	@Override
	public User save(User user) {
		// TODO Auto-generated method stub
		return userRepository.save(user);
	}

	@Override
	public User update(User user) {
		// TODO Auto-generated method stub
		return userRepository.save(user);
	}

	@Override
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}

	@Override
	public void deleteUserById(int userId) {
		// TODO Auto-generated method stub
		userRepository.deleteById(userId);
	}

	@Override
	public Optional<User> getUserById(int userId) {
		// TODO Auto-generated method stub
		return userRepository.findById(userId);
	}

}
