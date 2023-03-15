package the.coyote.back.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiOperation;
import the.coyote.back.dto.listStack.ListStackRequestDTO;
import the.coyote.back.dto.listStack.ListStackResponseDTO;
import the.coyote.back.service.ListStackService;

@RestController
@RequestMapping("api/v1/liststack")
@CrossOrigin()
public class StackListController {
	
	@Autowired
	private ListStackService listStackService;
	
	@PostMapping("/")
	@ApiOperation(value = "Incluir novo item.", notes ="Inclui um novo item do assunto selecionado.")
	public ResponseEntity<ListStackResponseDTO> saveNewListStack(@RequestBody ListStackRequestDTO listStackRequestDTO) {
		return ResponseEntity.status(HttpStatus.CREATED).body(listStackService.saveNewListStack(listStackRequestDTO));
	}
	
	@GetMapping("/")
	@ApiOperation(value = "Listar Todos", notes = "Lista todos os itens da stack selecionada.")
	public ResponseEntity<List<ListStackResponseDTO>> findAll() {
		return ResponseEntity.ok().body(listStackService.findAll());
	}

}
