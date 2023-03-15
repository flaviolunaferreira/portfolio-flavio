package the.coyote.back.dto.listStack;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import the.coyote.back.entity.ListStackEntity;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ListStackResponseDTO {

	private Long idListStack;
	private String name;
	private String description;
	private String referency;

	public ListStackResponseDTO(ListStackEntity save) {	
		this.setIdListStack(save.getIdListStack());
		this.setName(save.getName());
		this.setDescription(save.getDescription());
		this.setReferency(save.getReferency());
	}

}