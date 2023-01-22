export class ParameterHelper {
  static objectToURLParameters(object:any) {
    let urlParameters = Object.keys(object)
      .map((key) => `${key}=${encodeURIComponent(object[key])}`)
      .join('&');
    urlParameters = '?' + urlParameters;
    return urlParameters;
  }
}
