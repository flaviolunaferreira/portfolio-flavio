package the.coyote.back.exceptions;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ErroEntity {

	private Long timeStamp;
	private Integer status;
	private String error;
	
}
