import { ProdFilterPipe } from './prod-filter.pipe';

describe('ProdFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new ProdFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
