package com.example.ms_parking_management.repositories;



import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.ms_parking_management.entities.ParkingSpace;

@Repository
public interface ParkingSpaceRepository extends MongoRepository<ParkingSpace, String> {
	
	List<ParkingSpace> findByTypeAndStatus(ParkingSpace.Type type, ParkingSpace.Status status);

}
