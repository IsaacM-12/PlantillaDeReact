package app.controller;

import app.models.Image;
import app.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ImageController {

    @Autowired
    private ImageRepository imageRepository;

    // Seleccionar todos
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/image")
    public List<Image> getAll() {
        return imageRepository.findAll();
    }

    // Seleccionar por ID
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/image/{id}")
    public Image getById(@PathVariable String id) {
        Optional<Image> image = imageRepository.findById(id);

        if (image.isEmpty()) {
            throw new RuntimeException("No encontrado: " + id);
        }
        return image.get();
    }

    // Crear
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/image")
    public void create(@RequestBody Image req) {
        imageRepository.save(req);
    }

    // Borrar por ID
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/image/{id}")
    public void deleteById(@PathVariable String id) {
        Optional<Image> image = imageRepository.findById(id);

        if (image.isEmpty()) {
            throw new RuntimeException("No encontrado: " + id);
        } else {
            imageRepository.deleteById(id);
        }
    }
}
