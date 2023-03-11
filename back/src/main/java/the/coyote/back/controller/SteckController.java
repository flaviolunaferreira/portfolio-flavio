package the.coyote.back.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import the.coyote.back.service.StackService;

@RestController
@RequestMapping("api/v1/stack")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class SteckController {

	private StackService stackService;
	
}
