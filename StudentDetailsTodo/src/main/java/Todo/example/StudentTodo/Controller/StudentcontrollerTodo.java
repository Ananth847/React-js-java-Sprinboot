package Todo.example.StudentTodo.Controller;

import Todo.example.StudentTodo.Entity.StudentTodo;
import Todo.example.StudentTodo.Repository.StudentTodoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StudentcontrollerTodo {
    @Autowired
    StudentTodoRepo studentTodorepo;

    @PostMapping("data/save")
    public ResponseEntity<StudentTodo> saveStudent(@RequestBody StudentTodo studentTodo) {
        return new ResponseEntity<>(studentTodorepo.save(studentTodo), HttpStatus.CREATED);
    }
    @GetMapping("get/alldetails")
    public ResponseEntity<List<StudentTodo>> getAllDetails(){
        return new ResponseEntity<>(studentTodorepo.findAll(),HttpStatus.OK);
    }
    @PutMapping("update/details/{id}")
    public ResponseEntity<StudentTodo> updateDetails(@PathVariable long id,@RequestBody StudentTodo stud){
        Optional<StudentTodo> student = studentTodorepo.findById(id);
        if(student.isPresent()){
            student.get().setStudentName(stud.getStudentName());
            student.get().setLastName(stud.getLastName());
            student.get().setEmail(stud.getEmail());
            return new ResponseEntity<>(studentTodorepo.save(student.get()),HttpStatus.OK);
        }
        else {
             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }
    @GetMapping("get/single/{id}")
    public ResponseEntity<StudentTodo> getDetail(@PathVariable long id) {
        Optional<StudentTodo> optionalStudent = studentTodorepo.findById(id);
        if (optionalStudent.isPresent()) {
            return ResponseEntity.ok(optionalStudent.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("delete/{id}")
    public String delete(@PathVariable long id){
        studentTodorepo.deleteById(id);
        return " deleted sucessfully";
    }

}

