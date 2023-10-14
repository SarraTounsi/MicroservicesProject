package tn.esprit.ms_customer_review.entities;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import tn.esprit.ms_customer_review.entities.enums.ServiceType;
import tn.esprit.ms_customer_review.entities.enums.TicketStatus;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idFeedback;
    @Enumerated(EnumType.STRING)
    private TicketStatus ticketStatus;

    private  String title;

    private  String response_from_management;

    @Temporal(TemporalType.DATE)
    private Date review_date;

    @Enumerated(EnumType.STRING)
    private ServiceType serviceType;

    private  String description;


   /* @ManyToOne
    private User user;*/

}
