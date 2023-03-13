package the.coyote.back.service;

import java.util.List;

import org.springframework.stereotype.Service;

import the.coyote.back.dto.stack.NewStackRequestDto;
import the.coyote.back.dto.stack.NewStackResponseDTO;

@Service
public interface StackService {

	NewStackResponseDTO saveNewStack(NewStackRequestDto request);

	NewStackResponseDTO findById(Long id);

	List<NewStackResponseDTO> findByName(String name);

	List<NewStackResponseDTO> findAll();

}
