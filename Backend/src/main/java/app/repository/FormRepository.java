package app.repository;

import app.models.App;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FormRepository extends JpaRepository<App, String> {
}
