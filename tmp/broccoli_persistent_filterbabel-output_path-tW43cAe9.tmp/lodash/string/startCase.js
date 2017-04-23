define('lodash/string/startCase', ['exports', 'lodash/internal/createCompounder'], function (exports, _lodashInternalCreateCompounder) {
  'use strict';

  /**
   * Converts `string` to [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the start cased string.
   * @example
   *
   * _.startCase('--foo-bar');
   * // => 'Foo Bar'
   *
   * _.startCase('fooBar');
   * // => 'Foo Bar'
   *
   * _.startCase('__foo_bar__');
   * // => 'Foo Bar'
   */
  var startCase = (0, _lodashInternalCreateCompounder['default'])(function (result, word, index) {
    return result + (index ? ' ' : '') + (word.charAt(0).toUpperCase() + word.slice(1));
  });

  exports['default'] = startCase;
});