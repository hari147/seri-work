import { GlaucModule } from './glauc.module';

describe('GlaucModule', () => {
    let glaucModule: GlaucModule;

    beforeEach(() => {
        glaucModule = new GlaucModule();
    });

    it('should create an instance', () => {
        expect(glaucModule).toBeTruthy();
    });
});
