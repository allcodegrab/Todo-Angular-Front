import { InMemoryDbService } from 'angular-in-memory-web-api';
import { eventDB } from './events';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      
      'events': eventDB.events
    };
  }
}
