export class Exception extends Error {
	private status: number;
	private statusText: string;
	private reason: string;

	constructor(status: number, statusText: string, message: string) {
		super(message);
		this.status = status;
		this.statusText = statusText;
		this.reason = message;
	}

	public asResponse(): Response {
		return new Response(this.reason, {
			status: this.status,
			statusText: this.statusText
		});
	}

	static createUnauthorizedException = (reason: string): Exception => {
		return new Exception(401, 'Unauthorized', reason);
	};

	static createBadRequestException = (reason: string): Exception => {
		return new Exception(400, 'Bad Request', reason);
	};

	static createNotFoundException = (reason: string): Exception => {
		return new Exception(404, 'Not Found', reason);
	};

	static createInternalServerException = (reason: string): Exception => {
		return new Exception(500, 'Internal Server Error', reason);
	};
}
