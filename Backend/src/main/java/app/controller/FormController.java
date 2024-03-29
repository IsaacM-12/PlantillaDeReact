package app.controller;

import app.models.App;
import app.repository.FormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import java.util.Optional;

@RestController
public class FormController {

    @Autowired
    private FormRepository formRepository;

    // Seleccionar todos
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/app")
    public List<App> getAll() {
        return formRepository.findAll();
    }

    // Seleccionar por ID
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/app/{id}")
    public App getById(@PathVariable String id) {
        Optional<App> app = formRepository.findById(id);

        if (app.isEmpty()) {
            throw new RuntimeException("No encontrado: " + id);
        }
        return app.get();
    }

    // Crear
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/app")
    public void create(@RequestBody App req) {
        formRepository.save(req);
    }

    // Borrar por ID
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/app/{id}")
    public void deleteById(@PathVariable String id) {
        Optional<App> app = formRepository.findById(id);

        if (app.isEmpty()) {
            throw new RuntimeException("No encontrado: " + id);
        } else {
            formRepository.deleteById(id);
        }
    }
}
