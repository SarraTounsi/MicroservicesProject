package com.example.ms_parking_management.services;

import com.example.ms_parking_management.entities.ParkingSpace;
import com.example.ms_parking_management.repositories.ParkingSpaceRepository;
import com.example.ms_parking_management.services.interfaces.ParkingSpaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class ParkingSpaceServiceImp implements ParkingSpaceService {
    @Autowired
    private ParkingSpaceRepository parkingSpaceRepository;

    @Override
    public ParkingSpace addParkingSpace(ParkingSpace parkingSpace) {
        return parkingSpaceRepository.save(parkingSpace);
    }

    @Override
    public Optional<ParkingSpace> getParkingSpace(String id) {
        ParkingSpace parkingSpace = parkingSpaceRepository.findById(id).orElseThrow(() -> new RuntimeException(
                "Parking space with Id " + id + " does not exist"
        ));
        return parkingSpaceRepository.findById(id);
    }

    @Override
    public List<ParkingSpace> getAllParkingSpaces() {
        return parkingSpaceRepository.findAll();
    }

    @Override
    public boolean deleteParkingSpace(String id) {
        if (parkingSpaceRepository.findById(id).isPresent()) {
            parkingSpaceRepository.deleteById(id);
            return true;
        }
        return false;
    }
}