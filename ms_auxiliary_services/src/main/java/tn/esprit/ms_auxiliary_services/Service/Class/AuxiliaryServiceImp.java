package tn.esprit.ms_auxiliary_services.Service.Class;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.ms_auxiliary_services.Persistance.Entity.AuxiliaryService;
import tn.esprit.ms_auxiliary_services.Persistance.Repository.AuxiliaryServiceRepository;
import tn.esprit.ms_auxiliary_services.Service.Interface.IAuxiliaryServiceService;

import java.util.List;
@Slf4j
@Service
public class AuxiliaryServiceImp implements IAuxiliaryServiceService {
    @Autowired
    AuxiliaryServiceRepository _AuxServiceRepo;
    @Override
    public AuxiliaryService addAuxiliaryService(AuxiliaryService auxiliaryService) {
        return _AuxServiceRepo.save(auxiliaryService);
    }

    @Override
    public AuxiliaryService updateAuxiliaryService(int id, AuxiliaryService updatedService) {
        return _AuxServiceRepo.findById(id)
                .map(service -> {
                    // Update the fields of the existing service with the values from updatedService
                    service.setServiceType(updatedService.getServiceType());
                    service.setLabel(updatedService.getLabel());
                    service.setPrice(updatedService.getPrice());
                    service.setDescription(updatedService.getDescription());
                    service.set_available(updatedService.is_available());
                    service.setReason(updatedService.getReason());
                    return _AuxServiceRepo.save(service);
                })
                .orElse(null); // Handle not found scenario
    }
    @Override
    public List<AuxiliaryService> all_auxiliaryServices() {
        List<AuxiliaryService> ass= this._AuxServiceRepo.findAll();

        return ass;
    }
//do not need a delete auxiliary service for now
    @Override
    public boolean deleteAuxiliaryService(int id) {
        this._AuxServiceRepo.deleteById(id);
        return true;
    }

    @Override
    public AuxiliaryService getAuxiliaryService(int id) {
        return this._AuxServiceRepo.findById(id).get();
    }
}
