declare module GC{
    module Spread{
        module Excel{

            export class IO{
                /**
                 * Represents an excel import and export class.
                 * @class
                 */
                constructor();
                /**
                 * Imports an excel file.
                 * @param {Blob} file The excel file.
                 * @param {function} successCallBack Call this function after successfully loading the file. function (json) { }.
                 * @param {function} errorCallBack Call this function if an error occurs. The exception parameter object structure { errorCode: GC.Spread.Excel.IO.ErrorCode, errorMessage: string}.
                 * @param {Object} [options] The options for import excel.
                 * @param {string} [options.password] the excel file's password.
                 * @returns {void}
                 */
                open(file:  Blob,  successCallBack:  Function,  errorCallBack?:  Function,  options?:  any): void;
                /**
                 * Creates and saves an excel file with the SpreadJS json.
                 * @param {object} json The spread sheets json object, or string.
                 * @param {function} successCallBack Call this function after successfully exporting the file. function (blob) { }.
                 * @param {function} [errorCallBack] Call this function if an error occurs. The exception parameter object structure { errorCode: GC.Spread.Excel.IO.ErrorCode, errorMessage: string}.
                 * @param {Object} [options] The options for export excel.
                 * @param {string} [options.password] the excel file's password.
                 * @returns {void}
                 */
                save(json:  String,  successCallBack:  Function,  errorCallBack?:  Function,  options?:  any): void;
            }
            module IO{
                /**
                 * Specifies the excel io error code.
                 * @enum {number}
                 */
                export enum ErrorCode{
                    /**
                     *  File read and write exception.
                     */
                    fileIOError= 0,
                    /**
                     *  Incorrect file format.
                     */
                    fileFormatError= 1,
                    /**
                     *  The Excel file cannot be opened because the workbook/worksheet is password protected.
                     */
                    noPassword= 2,
                    /**
                     *  The specified password is incorrect.
                     */
                    invalidPassword= 3
                }

            }

        }

    }

}
