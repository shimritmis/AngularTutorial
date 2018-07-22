
/**
 * Service is just a simple js class.
 * Our service will simply log our messages to the console
 * 
 * - No decorator is required.
 * - The service will be injected into the componenets and or directives
 */
export class LoggingService {

    // class method
    logStatusChange(message: string) {
        console.log(`[Service] - ${message}`);
    }

}
