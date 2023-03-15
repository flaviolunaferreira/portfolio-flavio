package the.coyote.back.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import the.coyote.back.dto.listStack.ListStackRequestDTO;
import the.coyote.back.dto.listStack.ListStackResponseDTO;
import the.coyote.back.entity.ListStackEntity;
import the.coyote.back.entity.StackEntity;
import the.coyote.back.exceptions.DuplicateValue;
import the.coyote.back.repository.ListStackRepository;
import the.coyote.back.service.ListStackService;

@Service
public class ListStackServiceImpl implements ListStackService {
	
	@Autowired
	private ListStackRepository listStackRepository;

	@Override
	public ListStackResponseDTO saveNewListStack(ListStackRequestDTO listStackRequestDTO) {
		List<StackEntity> result = listStackRepository.findByNameIgnoreCase(listStackRequestDTO.getName());
		if (!result.isEmpty()) throw (new DuplicateValue("Sinto Muito... Já tenho uma item com esse nome."));
		return new ListStackResponseDTO(listStackRepository.save(listStackRequestDTO.newListStack()));
	}

	@Override
	public List<ListStackResponseDTO> findAll() {
		List<ListStackEntity> list = listStackRepository.findAll();
		return list.stream().map(ListStackResponseDTO::new).collect(Collectors.toList());
	}

}
