package tn.esprit.ms_reservation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
@SpringBootApplication
@EnableEurekaClient
public class MsReservationApplication {

	public static void main(String[] args) {

		SpringApplication.run(MsReservationApplication.class, args);
	}

}
