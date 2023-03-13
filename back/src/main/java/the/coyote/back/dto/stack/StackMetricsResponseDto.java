package the.coyote.back.dto.stack;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class StackMetricsResponseDto {

	private Long idStack;
	private String name;
	private String description;
	
	@CreatedBy
	private String createdBy;
	
	@CreatedDate
	private LocalDateTime createdDLocalDateTime;
	
	@LastModifiedBy
	private String modifieldString;
	
	@LastModifiedDate
	private LocalDateTime lasLocalDateTime;
	
}
