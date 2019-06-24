import { eventModule } from './event.module';

describe('eventModule', () => {
  let eventModule: eventModule;

  beforeEach(() => {
    eventModule = new eventModule();
  });

  it('should create an instance', () => {
    expect(eventModule).toBeTruthy();
  });
});
