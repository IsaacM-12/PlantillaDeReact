package app.models;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
public class App {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "ID", length = 36)
    private String id;

    @Column(name = "name")
    private String name;

    @Column(name = "number")
    private int number; // Nuevo atributo 'number'

    public App() {
    }

    public App(String id, String name, int number) {
        this.id = id;
        this.name = name;
        this.number = number;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }
}
