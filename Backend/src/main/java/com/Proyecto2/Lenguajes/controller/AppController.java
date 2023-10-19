package com.Proyecto2.Lenguajes.controller;

import com.Proyecto2.Lenguajes.models.App;
import com.Proyecto2.Lenguajes.repository.AppRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController

public class AppController {

    @Autowired
    private AppRepository AppRepository;


    // seleccionar todos
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/app")
    public List<App> getAll() {
        return AppRepository.findAll();
    }

    // seleccionar por id
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/app/{id}")
    public App getById(@PathVariable String id) {
        Optional<App> product = AppRepository.findById(id);

        if(product.isEmpty()){
            throw new RuntimeException("not found: " + id);
        }
        return product.get();
    }

    // crea
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/app")
    public void create(@RequestBody App req) {
        AppRepository.save(req);

//        String id = req.getId();
//        Optional<App> personaje = AppRepository.findById(id);
//
//        if(personaje.isEmpty()){
//            AppRepository.save(req);
//        }
//        else {
//            throw new RuntimeException("ID ocupado: " + id);
//        }
    }

    // borra por Id
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/app/{id}")
    public void deleteByID(@PathVariable String id){
        Optional<App> product = AppRepository.findById(id);
        if(product.isEmpty()){
            throw  new RuntimeException("not found: " + id);
        }
        AppRepository.deleteById(id);
    }

}
