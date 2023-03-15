package the.coyote.back.dto.listStack;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import the.coyote.back.entity.ListStackEntity;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ListStackRequestDTO {

	private String name;
	private String description;
	private String referency;
	

	public ListStackEntity newListStack() {
		return new ListStackEntity(name, description, referency);
	}
	
}
