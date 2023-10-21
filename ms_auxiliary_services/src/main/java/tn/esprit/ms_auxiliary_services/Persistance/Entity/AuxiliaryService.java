package tn.esprit.ms_auxiliary_services.Persistance.Entity;
import lombok.*;

import tn.esprit.ms_auxiliary_services.Persistance.Enum.ServiceType;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;


@Entity
@Getter
@Setter

@AllArgsConstructor
@NoArgsConstructor
public class AuxiliaryService implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idAux_Service;
    @Enumerated(EnumType.STRING)
    private ServiceType serviceType;
    private  String label;
    private  float price;
    private  String description;
    private boolean available;
    private String reason;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy="auxiliaryService")
    private Set<ServiceReservation> serviceReservations;

    @Override
    public String toString() {
        return "AuxiliaryService{" +
                "idAux_Service=" + idAux_Service +
                ", serviceType=" + serviceType +
                ", label='" + label + '\'' +
                ", price=" + price +
                ", description='" + description + '\'' +
                ", available=" + available +
                ", reason='" + reason + '\'' +
                '}';
    }
}
