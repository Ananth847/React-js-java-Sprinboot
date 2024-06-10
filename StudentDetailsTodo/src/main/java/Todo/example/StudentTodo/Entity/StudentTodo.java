package Todo.example.StudentTodo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Data
@Setter
public class StudentTodo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
  private long StudentId;
  private String StudentName;
  private String LastName;
  private String Email;


}
