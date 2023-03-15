package the.coyote.back.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import the.coyote.back.entity.ListStackEntity;
import the.coyote.back.entity.StackEntity;

public interface ListStackRepository extends JpaRepository<ListStackEntity, Long>{

	List<StackEntity> findByNameIgnoreCase(String name);

}
