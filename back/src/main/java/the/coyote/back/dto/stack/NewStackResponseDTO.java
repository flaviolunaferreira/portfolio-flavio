package the.coyote.back.dto.stack;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import the.coyote.back.entity.StackEntity;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NewStackResponseDTO {

	private Long idStack;
	private String name;
	private String description;
	
	public NewStackResponseDTO(StackEntity stack) {
		this.setIdStack(stack.getIdStack());
		this.setName(stack.getName());
		this.setDescription(stack.getDescription());
	}
	
	
}
