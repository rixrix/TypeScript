//// [tests/cases/compiler/es6ImportNamedImportInExportAssignment.ts] ////

//// [es6ImportNamedImportInExportAssignment_0.ts]

export var a = 10;

//// [es6ImportNamedImportInExportAssignment_1.ts]
import { a } from "es6ImportNamedImportInExportAssignment_0";
export = a;

//// [es6ImportNamedImportInExportAssignment_0.js]
exports.a = 10;
//// [es6ImportNamedImportInExportAssignment_1.js]
var _es6ImportNamedImportInExportAssignment_0 = require("es6ImportNamedImportInExportAssignment_0");
module.exports = _es6ImportNamedImportInExportAssignment_0.a;


//// [es6ImportNamedImportInExportAssignment_0.d.ts]
export declare var a: number;
//// [es6ImportNamedImportInExportAssignment_1.d.ts]
export = a;


//// [DtsFileErrors]


tests/cases/compiler/es6ImportNamedImportInExportAssignment_1.d.ts(1,10): error TS2304: Cannot find name 'a'.


==== tests/cases/compiler/es6ImportNamedImportInExportAssignment_0.d.ts (0 errors) ====
    export declare var a: number;
    
==== tests/cases/compiler/es6ImportNamedImportInExportAssignment_1.d.ts (1 errors) ====
    export = a;
             ~
!!! error TS2304: Cannot find name 'a'.
    