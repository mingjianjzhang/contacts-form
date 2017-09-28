// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
	  apiKey: "AIzaSyB7K-JUCJCE4N-emW5IQCaa33DiF6scjEc",
	  authDomain: "contacts-3a602.firebaseapp.com",
	  databaseURL: "https://contacts-3a602.firebaseio.com",
	  projectId: "contacts-3a602",
	  storageBucket: "contacts-3a602.appspot.com",
	  messagingSenderId: "673824791590"
	}
};
