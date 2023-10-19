package com.Proyecto2.Lenguajes.models;

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

    public App() {
    }

    public App(String id, String name) {
        this.id = id;
        this.name = name;
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
}
