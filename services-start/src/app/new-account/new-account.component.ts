import { Component, EventEmitter, Output } from '@angular/core';

// Add the service imprt
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],

  // Add the required service as provider attribute of the Componenet 
  providers: [LoggingService]
})

export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  // Add the Constructor with the Service injection
  // Make sure to specify the required type
  constructor(private logger: LoggingService) { }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });

    // Use the Service to log messages
    this.logger.logStatusChange('New status: ' + accountStatus);
  }
}
