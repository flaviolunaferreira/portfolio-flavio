package the.coyote.back.service;

import java.util.List;

import org.springframework.stereotype.Service;

import the.coyote.back.dto.listStack.ListStackRequestDTO;
import the.coyote.back.dto.listStack.ListStackResponseDTO;

@Service
public interface ListStackService {

	ListStackResponseDTO saveNewListStack(ListStackRequestDTO listStackRequestDTO);

	List<ListStackResponseDTO> findAll();

}
