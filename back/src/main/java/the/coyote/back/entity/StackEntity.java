package the.coyote.back.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class StackEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idStack;
	
	@NotNull
	private String name;
	
	private String description;
	
	@OneToMany(mappedBy = "stackEntity")
	private List<ListStackEntity> listStackEntity = new ArrayList<>();	
	
	@CreatedBy
	private String createdBy;
	
	@CreatedDate
	private LocalDateTime createdDLocalDateTime;
	
	@LastModifiedBy
	private String modifieldString;
	
	@LastModifiedDate
	private LocalDateTime lasLocalDateTime;
	
	public StackEntity(Long idStack, String name, String description) {
		this.idStack = idStack;
		this.name = name;
		this.description = description;
	}
	
	public StackEntity(String name, String description) {
		this.name = name;
		this.description = description;
	}
	
}
