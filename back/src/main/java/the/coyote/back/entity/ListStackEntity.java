package the.coyote.back.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class ListStackEntity {
	


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idListStack;
	
	private String name;
	
	private String description;
	
	private String referency;
		
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "idStack")
	private StackEntity stackEntity;
	
	@CreatedBy
	private String createdBy;
	
	@CreatedDate
	private LocalDateTime createdDLocalDateTime;
	
	@LastModifiedBy
	private String lastmodifieldString;
	
	@LastModifiedDate
	private LocalDateTime lastLocalDateTime;

	
	public ListStackEntity(String name, String description, String referency) {
		this.name = name;
		this.description = description;
		this.referency = referency;
	}
}
