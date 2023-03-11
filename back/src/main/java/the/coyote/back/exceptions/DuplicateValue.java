package the.coyote.back.exceptions;

public class DuplicateValue extends RuntimeException {
	
	private static final long serialVersionUID = 1L;

	public DuplicateValue(String message, Throwable cause) {
		super(message, cause);
	}
	
	public DuplicateValue(String message) {
		super(message);
	}

}
