package com.Proyecto2.Lenguajes.repository;

import com.Proyecto2.Lenguajes.models.App;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppRepository extends JpaRepository<App, String> {
}
