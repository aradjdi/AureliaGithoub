export function configure(aurelia) {
  aurelia.globalResources(
    'valueConverters/date-format',
    'valueConverters/decode-b64'
  );
}
