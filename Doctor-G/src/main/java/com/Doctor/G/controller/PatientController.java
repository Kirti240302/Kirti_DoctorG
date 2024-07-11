package com.Doctor.G.controller;

import com.Doctor.G.entity.Patient;
import com.Doctor.G.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.lang.model.util.Elements;
import javax.management.AttributeNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;


    public PatientController(PatientRepository patientRepository) {

        super();

        this.patientRepository = patientRepository;

    }


    @PostMapping("/patients")

    public Patient createPatient(@RequestBody Patient patient) {


        return patientRepository.save(patient);


    }


    @GetMapping("/patients")

    public List<Patient> getAllPatient() {


        return patientRepository.findAll();

    }


    @GetMapping("patients/{id}")

    public ResponseEntity<Patient> getPatientById(@PathVariable long id) throws AttributeNotFoundException {


        Patient patient = patientRepository.findById(id).orElseThrow(() -> new AttributeNotFoundException("Patient not fount with id :" + id));


        return ResponseEntity.ok(patient);


    }


    @DeleteMapping("/patients/{id}")

    public ResponseEntity<Map<String, Boolean>> deletePatient(@PathVariable long id) throws AttributeNotFoundException {


        Patient patient = patientRepository.findById(id).orElseThrow(() -> new AttributeNotFoundException("Patient not found with id :" + id));


        patientRepository.delete(patient);


        Map<String, Boolean> response = new HashMap<>();

        response.put("Deleted", Boolean.TRUE);


        return ResponseEntity.ok(response);


    }


    @PutMapping("/patients/{id}")

    public ResponseEntity<Patient> updatePatientById(@PathVariable long id, @RequestBody Patient patientDetails) throws AttributeNotFoundException {


        Patient patient = patientRepository.findById(id).orElseThrow(() -> new AttributeNotFoundException("Patient not found with id :" + id));


        patient.setAge(patientDetails.getAge());

        patient.setName(patientDetails.getName());

        patient.setBlood(patientDetails.getBlood());

        patient.setDose(patientDetails.getDose());

        patient.setFees(patientDetails.getFees());

        patient.setPrescription(patientDetails.getPrescription());

        patient.setUrgency(patientDetails.getUrgency());


        Patient savedPatient = patientRepository.save(patient);


        return ResponseEntity.ok(savedPatient);


    }
}