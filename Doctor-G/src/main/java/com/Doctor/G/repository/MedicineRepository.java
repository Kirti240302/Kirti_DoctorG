package com.Doctor.G.repository;

import com.Doctor.G.doclogin.entity.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine ,Long> {
}
