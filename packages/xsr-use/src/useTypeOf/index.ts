export enum EnumDataType {
    number = '[object Number]',
    string = '[object String]',
    boolean = '[object Boolean]',
    null = '[object Null]',
    undefined = '[object Undefined]',
    object = '[object Object]',
    array = '[object Array]',
    date = '[object Date]',
    regexp = '[object RegExp]',
    set = '[object Set]',
    map = '[object Map]',
    file = '[object File]',
    function = '[object Function]',
}
const isNumber = (data: unknown) => {
    return Object.prototype.toString.call(data) === EnumDataType.number;
}
const isString = (data: unknown) => {
    return Object.prototype.toString.call(data) === EnumDataType.string;
}
const isBoolean = (data: unknown) => {
    return Object.prototype.toString.call(data) === EnumDataType.boolean;
}
const isNull = (data: unknown) => {
    return Object.prototype.toString.call(data) === EnumDataType.null;
}
const isUndefined = (data: unknown) => {
    return Object.prototype.toString.call(data) === EnumDataType.undefined;
}
const isObject = (data: unknown) => {
    return Object.prototype.toString.call(data) === EnumDataType.object;
}
const isArray = (data: unknown) => {
    return Object.prototype.toString.call(data) === EnumDataType.array;
}
const isDate = (data: unknown) => {
    return Object.prototype.toString.call(data) === EnumDataType.date;
}
const isRegExp = (data: unknown) => {
    return Object.prototype.toString.call(data) === EnumDataType.regexp;
}
const isSet = (data: unknown) => {
    return Object.prototype.toString.call(data) === EnumDataType.set;
}
const isMap = (data: unknown) => {
    return Object.prototype.toString.call(data) === EnumDataType.map;
}
const isFile = (data: unknown) => {
    return Object.prototype.toString.call(data) === EnumDataType.file;
}
const isFunction = (data: unknown) => {
    return Object.prototype.toString.call(data) === EnumDataType.function;
}
const useTypeOf = {
    isNumber,isString,isBoolean,isNull,isUndefined,isObject,isArray,isDate,isRegExp,isSet,isMap,isFile,isFunction  
};
export default useTypeOf