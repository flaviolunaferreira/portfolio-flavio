package the.coyote.back.exceptions;

import javax.servlet.ServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


@ControllerAdvice
public class ErrorController {
	
	@ExceptionHandler(NotFound.class)
	public ResponseEntity<ErroEntity> notFound(NotFound e, ServletRequest request) {
		ErroEntity error = new ErroEntity(System.currentTimeMillis(), HttpStatus.NOT_FOUND.value(),	e.getMessage());
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
	}

}
