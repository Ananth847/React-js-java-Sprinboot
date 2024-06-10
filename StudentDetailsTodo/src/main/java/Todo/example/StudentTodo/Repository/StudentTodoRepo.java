package Todo.example.StudentTodo.Repository;

import Todo.example.StudentTodo.Entity.StudentTodo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentTodoRepo extends JpaRepository<StudentTodo,Long> {
}
