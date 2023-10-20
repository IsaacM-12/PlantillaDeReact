package app.models;

import org.hibernate.annotations.GenericGenerator;
import javax.persistence.*;

@Entity
public class Image {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "ID", length = 36)
    private String id;

    @Column(name = "name")
    private String name;

    @Column(name = "url")
    private String url;

    public Image() {
    }

    public Image(String name, String url) {
        this.name = name;
        this.url = url;
    }

    // Getters and setters
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

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
