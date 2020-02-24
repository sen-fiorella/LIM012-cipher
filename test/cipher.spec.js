// Importamos el objeto `cipher`, que contiene los métodos `encode` y `decode`

import cipher from '../src/cipher';

describe('cipher', () => {

  it('cipher debería ser un objeto', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      expect(typeof cipher.encode).toBe('function');
    });

    it('debería arrojar TypeError cuando se invoca con tipos de argumento incorrectos', () => {
      expect(() => cipher.encode()).toThrow(TypeError);
      expect(() => cipher.encode(0)).toThrow(TypeError);
      expect(() => cipher.encode(null, [])).toThrow(TypeError);
      expect(() => cipher.encode(0, 0)).toThrow(TypeError);
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      expect(cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    // Hacker edition
    //
    // Soporte para minúsculas:
    //
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      expect(cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz')).toBe('hijklmnopqrstuvwxyzabcdefg');
    });

    // Soporte para números:
    //
    it('debería retornar "0123456789" para "0123456789" con offset 33', () => {
      expect(cipher.encode(33, '0123456789')).toBe('0123456789');
    });

    // Soporte para caracteres no alfabéticos
    //
    it('debería retornar " !@" para " !@"', () => {
      expect(cipher.encode(33, ' !@')).toBe(' !@');
    });

    // Soporte para caracteres no cifrados, devuelve el mismo resultado
    //
    it('debería retornar "ñá¡" para "ñá¡"', () => {
      expect(cipher.encode(33, 'ñá¡')).toBe('ñá¡');
    });

  });

  describe('cipher.decode', () => {

    it('debería ser una function', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    it('debería arrojar TypeError cuando se invoca con tipos de argumento incorrectos', () => {
      expect(() => cipher.decode()).toThrow(TypeError);
      expect(() => cipher.decode(0)).toThrow(TypeError);
      expect(() => cipher.decode(null, [])).toThrow(TypeError);
      expect(() => cipher.decode(0, 0)).toThrow(TypeError);
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      expect(cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    //
    // Hacker edition
    //
    // Soporte para minúsculas
    //
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
       expect(cipher.decode(33, 'hijklmnopqrstuvwxyzabcdefg')).toBe('abcdefghijklmnopqrstuvwxyz');
     });

    // Soporte para números
    //
    it('debería retornar "0123456789" para "0123456789"', () => {
      expect(cipher.decode(33, '0123456789')).toBe('0123456789');
    });

    // Soporte para caracteres no alfabéticos
    //
     it('debería retornar " !@" para " !@"', () => {
       expect(cipher.decode(33, ' !@')).toBe(' !@');
     });

    // Soporte para caracteres no descifrados, devuelve el mismo resultado
    //
    it('debería retornar "ñá¡" para "ñá¡"', () => {
      expect(cipher.decode(33, 'ñá¡')).toBe('ñá¡');
    });
  });
});
