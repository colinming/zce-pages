const zcePages = require('..')

// TODO: Implement module test
test('zce-pages', () => {
  expect(zcePages('w')).toBe('w@zce.me')
  expect(zcePages('w', { host: 'wedn.net' })).toBe('w@wedn.net')
  expect(() => zcePages(100)).toThrow('Expected a string, got number')
})
