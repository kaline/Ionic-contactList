// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  version: '0.0.1',
  production: false,
  firebaseConfig : {
    dev : {
      apiKey: 'AIzaSyA-GtIsK_u4DNXs9-rEXkg72pG65xkosJk',
      authDomain: 'cepapp-a38f6.firebaseapp.com',
      projectId: 'cepapp-a38f6',
      storageBucket: 'cepapp-a38f6.appspot.com',
      messagingSenderId: '126834635980',
      appId: '1:126834635980:web:f1036ccd63df6413583e69',
      measurementId: 'G-XYSJSG2YYS',
      databaseURL: 'https://cepapp-a38f6-default-rtdb.firebaseio.com/'
    },
    prod : {
      apiKey: 'AIzaSyA-GtIsK_u4DNXs9-rEXkg72pG65xkosJk',
      authDomain: 'cepapp-a38f6.firebaseapp.com',
      projectId: 'cepapp-a38f6',
      storageBucket: 'cepapp-a38f6.appspot.com',
      messagingSenderId: '126834635980',
      appId: '1:126834635980:web:f1036ccd63df6413583e69',
      measurementId: 'G-XYSJSG2YYS',
      databaseURL: 'https://cepapp-a38f6-default-rtdb.firebaseio.com/'
    }
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
