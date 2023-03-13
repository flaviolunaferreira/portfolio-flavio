package the.coyote.back.dto.stack;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import the.coyote.back.entity.StackEntity;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NewStackRequestDto {

	private String name;
	private String description;
	
	public StackEntity newStack() {
		return new StackEntity(name, description);
	}
	
}
