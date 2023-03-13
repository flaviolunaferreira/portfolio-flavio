package the.coyote.back.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import the.coyote.back.dto.stack.NewStackRequestDto;
import the.coyote.back.dto.stack.NewStackResponseDTO;
import the.coyote.back.entity.StackEntity;
import the.coyote.back.exceptions.DuplicateValue;
import the.coyote.back.repository.StackRepository;
import the.coyote.back.service.StackService;

@Service
public class StackServiceImpl implements StackService{

	@Autowired
	private StackRepository stackRepository;

	@Override
	public NewStackResponseDTO saveNewStack(NewStackRequestDto request) throws DuplicateValue {
		List<StackEntity> result = stackRepository.findByNameIgnoreCase(request.getName());
		if (!result.isEmpty()) throw (new DuplicateValue("Sinto Muito... Já tenho uma stack com esse nome."));
		return new NewStackResponseDTO(stackRepository.save(request.newStack()));
	}

	@Override
	public NewStackResponseDTO findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<NewStackResponseDTO> findByName(String name) {
		List<StackEntity> result = stackRepository.findStackByNameContainingIgnoreCase(name);
		return result.stream().map(NewStackResponseDTO::new).collect(Collectors.toList());
	}

	@Override
	public List<NewStackResponseDTO> findAll() {
		return stackRepository.findAll().stream().map(NewStackResponseDTO::new).collect(Collectors.toList());
	}

}
