package the.coyote.back.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiOperation;
import the.coyote.back.dto.stack.NewStackRequestDto;
import the.coyote.back.dto.stack.NewStackResponseDTO;
import the.coyote.back.exceptions.DuplicateValue;
import the.coyote.back.exceptions.NotFound;
import the.coyote.back.service.StackService;

@RestController
@RequestMapping("api/v1/stack")
public class SteckController {

	@Autowired
	private StackService stackService;
	
	@PostMapping("/")
	@ApiOperation(value = "Nova Stack", notes = "Adiciona uma nova Stack no banco de dados")
	public ResponseEntity<NewStackResponseDTO> saveNewStack(@RequestBody NewStackRequestDto request) throws DuplicateValue {
		return ResponseEntity.status(HttpStatus.CREATED).body(stackService.saveNewStack(request));
	}
	
	@GetMapping("/id/{id}")
	@ApiOperation(value = "Buscar por id", notes = "Procura Stack por id")
	public ResponseEntity<NewStackResponseDTO> findById(@PathVariable Long id) throws NotFound {
		return new ResponseEntity<>(stackService.findById(id), HttpStatus.FOUND);
	}
	
	@GetMapping("/name/{name}")
	@ApiOperation(value = "Buscar por nome", notes = "Procura uma Stack que o nome contenha o argumento fornecido.")
	public ResponseEntity<List<NewStackResponseDTO>> findByName(@PathVariable String name) throws NotFound {
		return new ResponseEntity<>(stackService.findByName(name), HttpStatus.FOUND);
	}
	
	@GetMapping("/")
	@ApiOperation(value = "Lista todas as Stack´s", notes = "Lista todas as Stack em ordem de id.")
	public ResponseEntity<List<NewStackResponseDTO>> findAll() {
		return new ResponseEntity<>(stackService.findAll(), HttpStatus.ALREADY_REPORTED);
	}
	
}
