package the.coyote.back.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import the.coyote.back.entity.StackEntity;

public interface StackRepository extends JpaRepository<StackEntity, Long>{

	List<StackEntity> findStackByNameContainingIgnoreCase(String name);

	List<StackEntity> findByNameIgnoreCase(String name);

	StackEntity findByName(String name);

}
