FROM openjdk:8
EXPOSE 8087
ADD target/ms_inventory_management-0.0.1-SNAPSHOT.jar ms_inventory_management-0.0.1.jar
ENTRYPOINT ["java", "-jar","ms_inventory_management-0.0.1.jar"]

# FROM maven:3.8.2-jdk-8

# WORKDIR /customer_reviewer_service
# COPY . .
# RUN mvn clean install

# CMD mvn spring-boot:run